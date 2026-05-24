import { useState, type SubmitEvent } from "react";
import { useScrollAnimation } from "@/common/hooks/useScrollAnimation";
import { contact, address } from "@/common/data/settings";
import { toDisplayPhone } from "@/common/utils/displayUtils";
import { InstagramIcon } from "@/common/assets/icons/InstagramIcon";
import { WhatsAppIcon } from "@/common/assets/icons/WhatsAppIcon";
import type { WithId } from "@/common/types/extension";
import { BusinessHours } from "@/common/ui/BusinessHours";

export default function Contact({ id }: WithId) {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id={id} className="py-24 bg-bg-secondary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-decorative text-xl text-primary">
            entre em contato
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          <p className="font-body text-text-secondary mt-4 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer fazer uma encomenda? Estamos aqui para
            ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-body text-sm font-medium text-text-primary mb-2"
                >
                  Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-bg-secondary rounded-xl font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-body text-sm font-medium text-text-primary mb-2"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-bg-secondary rounded-xl font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-body text-sm font-medium text-text-primary mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-bg-secondary rounded-xl font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Descreva o que você precisa..."
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 bg-primary text-white font-body font-medium rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSubmitted ? "✓ Mensagem Enviada!" : "Enviar Mensagem"}
              </button>
            </form>
          </div>

          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-text-primary">
                  Telefone
                </h4>
                <p className="font-body text-text-secondary">
                  {toDisplayPhone(contact.social.whatsapp)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-text-primary">
                  E-mail
                </h4>
                <p className="font-body text-text-secondary">{contact.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-complement/10 rounded-xl flex items-center justify-center text-complement shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-text-primary">
                  Endereço
                </h4>
                <p className="font-body text-text-secondary">
                  {address.street}, {address.neighborhood}
                  <br />
                  {address.city} – {address.state}, {address.zip}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-detail/10 rounded-xl flex items-center justify-center text-detail shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-text-primary">
                  Horário
                </h4>
                <BusinessHours className="font-body text-text-secondary" />
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-heading text-lg font-semibold text-text-primary mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a
                  id="social-instagram"
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>

                <a
                  id="social-whatsapp"
                  href={`https://wa.me/${contact.social.whatsapp.fullNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
