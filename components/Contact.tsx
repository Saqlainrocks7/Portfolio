import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      <div className="card p-8">
        <div className="text-lg font-semibold">Contact Information</div>

        <div className="mt-6 grid gap-5">
          <Row icon={<Mail style={{ color: "rgb(var(--teal))" }} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <Row icon={<Phone style={{ color: "rgb(var(--teal))" }} />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`} />
          <Row icon={<MapPin style={{ color: "rgb(var(--violet))" }} />} label="Location" value={profile.location} />
        </div>
      </div>

      <div className="grid gap-5">
        <div className="card p-8">
          <div className="text-lg font-semibold">Social Links</div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <a className="btn justify-start" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a className="btn justify-start" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>
        </div>

        <div className="card p-8">
          <div className="text-lg font-semibold">Ready to work together?</div>
          <div className="mt-2 subtle text-sm">Let's discuss how I can contribute to your team or project.</div>
          <div className="mt-6">
            <a className="btn btn-primary w-full" href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.fullName)}`}>
              <Send size={16} /> Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-11 w-11 rounded-xl border border-[rgb(var(--stroke))] bg-[rgba(255,255,255,0.02)] grid place-items-center">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="subtle text-xs">{label}</div>
        {href ? (
          <a href={href} className="text-sm hover:underline underline-offset-4">
            {value}
          </a>
        ) : (
          <div className="text-sm">{value}</div>
        )}
      </div>
    </div>
  );
}
