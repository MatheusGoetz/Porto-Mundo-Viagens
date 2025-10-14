import { useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { COMPANY_WHATSAPP_PHONE_E164 } from "@/lib/config";
import { Send, Phone } from "lucide-react";

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  quantidadePassageiros: number;
  origem: string;
  destino: string;
  dataSaida: string; // dd/mm/aaaa
  dataRetorno: string; // dd/mm/aaaa
  mensagem: string;
  aceitarTermos: boolean;
};

export default function WhatsAppForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    getValues,
    trigger,
  } = useForm<FormValues>({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      quantidadePassageiros: 1,
      origem: "",
      destino: "",
      dataSaida: "",
      dataRetorno: "",
      mensagem: "",
      aceitarTermos: false,
    },
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const apply = (raw?: string | null) => {
      const val = raw ? decodeURIComponent(raw).trim() : "";
      if (val) {
        setValue("destino", val);
        try { trigger("destino"); } catch {}
      }
    };

    const readFromUrlOrStorage = () => {
      let val: string | null = null;
      try {
        const search = new URLSearchParams(window.location.search);
        val = search.get("dest") || search.get("destino");
      } catch {}
      if (!val && window.location.hash) {
        const hash = window.location.hash;
        const idx = hash.indexOf("?");
        if (idx >= 0) {
          const hs = new URLSearchParams(hash.slice(idx + 1));
          val = hs.get("dest") || hs.get("destino");
        }
      }
      if (!val) {
        try { val = sessionStorage.getItem("prefill_destino"); } catch {}
      }
      if (val) {
        apply(val);
        try { sessionStorage.removeItem("prefill_destino"); } catch {}
      }
    };

    const onHashChange = () => readFromUrlOrStorage();
    const onPrefillEvent = (e: Event) => {
      try {
        const ce = e as CustomEvent<any>;
        apply(String(ce.detail || ""));
      } catch {}
    };

    // Initial attempt
    readFromUrlOrStorage();

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("prefill-destino", onPrefillEvent as EventListener);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("prefill-destino", onPrefillEvent as EventListener);
    };
  }, [setValue, trigger]);

  const canSend = useMemo(() => COMPANY_WHATSAPP_PHONE_E164.trim().length >= 10, []);

  const digits = (v: string) => v.replace(/\D/g, "");
  const maskDate = (v: string) => {
    const d = digits(v).slice(0, 8);
    const p1 = d.slice(0, 2);
    const p2 = d.slice(2, 4);
    const p3 = d.slice(4, 8);
    return [p1, p2, p3].filter(Boolean).join("/");
  };
  const isValidDate = (v: string) => {
    const m = v.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!m) return false;
    const dd = Number(m[1]);
    const mm = Number(m[2]);
    const yyyy = Number(m[3]);
    const dt = new Date(yyyy, mm - 1, dd);
    return dt.getFullYear() === yyyy && dt.getMonth() === mm - 1 && dt.getDate() === dd;
  };
  const parseDate = (v: string) => {
    if (!isValidDate(v)) return null;
    const [dd, mm, yyyy] = v.split("/").map(Number);
    return new Date(yyyy, mm - 1, dd);
  };
  const todayStart = () => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  };

  const onSubmit = (values: FormValues) => {
    const extraMsg = values.mensagem && values.mensagem.trim().length > 0 ? `\n\nMensagem adicional:\n${values.mensagem.trim()}` : "";
    const template = `Olá, sou um novo cliente interessado em uma proposta de viagem!\n\nMeus dados:\n- Nome: ${values.nome}\n- E-mail: ${values.email}\n- Telefone: ${values.telefone}\n- Quantidade de passageiros: ${values.quantidadePassageiros}\n\nViagem:\n- Origem: ${values.origem}\n- Destino: ${values.destino}\n- Data de saída: ${values.dataSaida}\n- Data de retorno: ${values.dataRetorno}${extraMsg}\n\nAguardo o retorno com a proposta, obrigado!`;

    const text = encodeURIComponent(template);

    if (canSend) {
      const url = `https://wa.me/${COMPANY_WHATSAPP_PHONE_E164}?text=${text}`;
      window.open(url, "_blank");
      setSent(true);
      reset();
    }
  };

  return (
    <section id="contato" className="container mx-auto py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">
        <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold">Fale com um especialista</h3>
          <p className="text-muted-foreground mt-1">
            Envie seus dados e receba a proposta diretamente no WhatsApp.
          </p>

          {!canSend && (
            <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-foreground">
              <p className="font-semibold text-accent-foreground">
                Configure o WhatsApp do vendedor
              </p>
              <p className="text-foreground/80">
                Defina o número em client/lib/config.ts para habilitar o envio automático via WhatsApp.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nome</label>
                <input
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("nome", { required: true })}
                />
                {errors.nome && <span className="text-xs text-destructive">Obrigatório</span>}
              </div>
              <div>
                <label className="text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-xs text-destructive">Obrigatório</span>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Telefone</label>
                <input
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("telefone", { required: true })}
                />
                {errors.telefone && <span className="text-xs text-destructive">Obrigatório</span>}
              </div>
              <div>
                <label className="text-sm font-medium">Quantidade de Passageiros</label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("quantidadePassageiros", { required: true, min: 1, valueAsNumber: true })}
                />
                {errors.quantidadePassageiros && <span className="text-xs text-destructive">Informe ao menos 1 passageiro</span>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Origem (de onde você vem?)</label>
                <input
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("origem", { required: true })}
                />
                {errors.origem && <span className="text-xs text-destructive">Obrigatório</span>}
              </div>
              <div>
                <label className="text-sm font-medium">Destino (para onde vai?)</label>
                <input
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("destino", { required: true })}
                />
                {errors.destino && <span className="text-xs text-destructive">Obrigatório</span>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Data de Saída</label>
                <input
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="dd/mm/aaaa"
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("dataSaida", {
                    required: true,
                    validate: (v) => {
                      const d = parseDate(v);
                      if (d && d < todayStart()) return "Data de saída não pode ser no passado";
                      return true;
                    },
                    onChange: (e) => setValue("dataSaida", maskDate(e.target.value), { shouldValidate: true }),
                  })}
                  maxLength={10}
                />
                {errors.dataSaida && <span className="text-xs text-destructive">{String(errors.dataSaida.message || "Data inválida")}</span>}
              </div>
              <div>
                <label className="text-sm font-medium">Data de Retorno</label>
                <input
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="dd/mm/aaaa"
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("dataRetorno", {
                    required: true,
                    validate: (v) => {
                      const s = parseDate(getValues("dataSaida"));
                      const r = parseDate(v);
                      if (s && r && r < s) return "Retorno deve ser após a saída";
                      return true;
                    },
                    onChange: (e) => setValue("dataRetorno", maskDate(e.target.value), { shouldValidate: true }),
                  })}
                  maxLength={10}
                />
                {errors.dataRetorno && <span className="text-xs text-destructive">{String(errors.dataRetorno.message || "Data inválida")}</span>}
              </div>
            </div>


            <div>
              <label className="text-sm font-medium">Mensagem</label>
              <textarea
                rows={4}
                placeholder="Quero mais informações sobre o destino, datas e valores."
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                {...register("mensagem")}
              />
            </div>

            <label className="mt-2 flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 h-4 w-4" {...register("aceitarTermos", { required: true })} />
              <span> Aceito os termos da política de privacidade.</span>
            </label>
            {errors.aceitarTermos && <span className="-mt-2 text-xs text-destructive">Você precisa aceitar os termos para continuar</span>}

            <button
              type="submit"
              disabled={!canSend || isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow hover:brightness-95 disabled:opacity-60"
            >
              <Phone className="h-5 w-5" /> Enviar pelo WhatsApp
            </button>
            {sent && (
              <p className="text-sm text-green-600">
                Redirecionamos você para o WhatsApp com sua mensagem!
              </p>
            )}
          </form>
        </div>
        <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col justify-center">
          <h4 className="text-xl font-bold">Atendimento personalizado</h4>
          <p className="mt-2 text-muted-foreground">
            Nossos especialistas cuidam de tudo: passagens, hospedagem, roteiros e experiências exclusivas.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/90">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent"/> Roteiros sob medida</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent"/> Suporte durante a viagem</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent"/> Parcerias com as melhores redes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
