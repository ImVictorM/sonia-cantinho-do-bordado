import {
  toDisplayPhone,
  toDisplayBusinessHours,
} from "@/common/utils/displayUtils";
import {
  brand,
  contact,
  address,
  weeklyBusinessHours,
} from "@/common/data/settings";
import { WhatsAppIcon } from "@/common/assets/icons/WhatsAppIcon";
import { InstagramIcon } from "@/common/assets/icons/InstagramIcon";
import type { Section } from "@/common/types/section";

type FooterProps = {
  sections: Section[];
};

export default function Footer({ sections }: FooterProps) {
  return (
    <footer id="footer" className="bg-text-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">
              {brand.name}
            </h3>
            <p className="font-decorative text-lg text-primary-light">
              bordados com qualidade profissional ✿
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Bordados personalizados para uniformes, presentes e peças
              especiais.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-white">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Links do rodapé">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="font-body text-sm text-white/60 hover:text-primary-light transition-colors duration-300"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-white">
              Contato
            </h4>
            <div className="space-y-3 font-body text-sm text-white/60">
              <p>{toDisplayPhone(contact.social.whatsapp)}</p>
              <p>{contact.email}</p>
              <p>
                {address.street}
                <br />
                {address.city} – {address.state}
              </p>
              <div>
                <p>
                  Seg a sex:{" "}
                  {toDisplayBusinessHours(weeklyBusinessHours.weekdays)}
                </p>
                <p>
                  Sáb:{" "}
                  {toDisplayBusinessHours(
                    weeklyBusinessHours.weekends.saturday,
                  )}
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>

              <a
                href={`https://wa.me/${contact.social.whatsapp.fullNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/40">
            © 2026 {brand.name}. Todos os direitos reservados.
          </p>
          <p className="font-decorative text-sm text-white/30">
            qualidade em cada detalhe ✿
          </p>
        </div>
      </div>
    </footer>
  );
}
