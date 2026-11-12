import type { StaticImageData } from "next/image";
import { CertificateViewer } from "@/components/home/certificate-viewer";
import { SectionLabel } from "@/components/home/section-label";
import certificateImage from "@/public/evidence/tubitak/tubitak-4006-certificate.jpg";

// Verified from the participation certificate.
const record = [
  { label: "Program", value: "TÜBİTAK 4006 Science Fairs Support Program" },
  { label: "Event", value: "Beylikdüzü İMKB Middle School Science Fair" },
  { label: "Date", value: "9 May 2022" },
  { label: "Role", value: "Student participant" }
];

/**
 * Digital copy of Metin's paper certificate: cleaned up with AI from photos of
 * the original, with the Turkish ID number removed. The caption says so.
 */
const certificate: { image: StaticImageData; download?: string } | null = {
  image: certificateImage,
  download: "/evidence/tubitak/tubitak-4006-certificate.jpg"
};

export function Science() {
  return (
    <section
      aria-labelledby="science-title"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
      id="science"
    >
      <SectionLabel label="Science" number="03" />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight text-titanium-50 sm:text-4xl"
            id="science-title"
          >
            Scientific Curiosity &amp; Early Research
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-titanium-200">
            My interest in science and independent problem-solving began early.
            In 2022, I participated as a student in the Beylikdüzü İMKB Middle
            School Science Fair, organized under TÜBİTAK&apos;s 4006 Science
            Fairs Support Program. The experience contributed to my interest in
            scientific exploration, experimentation, and creating solutions.
          </p>
        </div>

        <div className="lg:col-span-5">
          {certificate ? (
            <CertificateViewer
              alt="TÜBİTAK 4006 Science Fair participation certificate of Metin Berat Dönmez, Beylikdüzü İMKB Middle School, 9 May 2022"
              caption="My participation certificate. Digitally cleaned with AI from photos of the original paper; ID number removed."
              downloadHref={certificate.download}
              image={certificate.image}
            />
          ) : null}
          <dl className={`divide-y divide-white/10 border-y border-white/10 ${certificate ? "mt-8" : ""}`}>
            {record.map((item) => (
              <div className="grid grid-cols-[6rem_1fr] gap-4 py-3" key={item.label}>
                <dt className="pt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-titanium-500">
                  {item.label}
                </dt>
                <dd className="text-sm leading-6 text-titanium-100">{item.value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
              <dt className="pt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-titanium-500">
                Evidence
              </dt>
              <dd className="text-sm leading-6 text-titanium-100">
                Participation certificate
                {certificate ? null : (
                  <span className="block text-xs text-titanium-500">
                    Scan coming soon, with my ID number removed.
                  </span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
