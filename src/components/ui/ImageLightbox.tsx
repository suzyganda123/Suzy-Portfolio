"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import type { ProjectImage } from "@/data/projects";

type Props = {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function ImageLightbox({ images, index, onClose, onChange }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];
  const hasMany = images.length > 1;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMany) onChange((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight" && hasMany) onChange((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [hasMany, images.length, index, onChange, onClose]);

  if (!image || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/88 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="sr-only">
        {image.alt}
      </p>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="pressable absolute right-4 top-4 z-[1] inline-flex size-11 items-center justify-center rounded-full bg-surface/95 text-ink shadow-soft md:right-6 md:top-6"
        aria-label="Close larger view"
      >
        <X size={20} weight="bold" aria-hidden />
      </button>

      {hasMany ? (
        <>
          <button
            type="button"
            className="pressable absolute left-3 top-1/2 z-[1] inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-soft md:left-6"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + images.length) % images.length);
            }}
          >
            <CaretLeft size={20} weight="bold" aria-hidden />
          </button>
          <button
            type="button"
            className="pressable absolute right-3 top-1/2 z-[1] inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-soft md:right-6"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % images.length);
            }}
          >
            <CaretRight size={20} weight="bold" aria-hidden />
          </button>
        </>
      ) : null}

      <figure
        className="relative max-h-[min(92dvh,1100px)] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto max-h-[min(86dvh,1000px)] overflow-hidden rounded-xl bg-surface shadow-lift">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="mx-auto h-auto max-h-[min(86dvh,1000px)] w-auto max-w-full object-contain"
            sizes="(max-width: 1280px) 94vw, 1024px"
            priority
            quality={90}
          />
        </div>
        <figcaption className="mt-3 text-center text-[13px] leading-snug text-surface/85">
          {image.alt}
          {hasMany ? (
            <span className="ml-2 tabular-nums text-surface/55">
              {index + 1} / {images.length}
            </span>
          ) : null}
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}
