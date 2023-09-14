"use client";

export default function ComponentGrid() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3">
      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        Content
      </div>
      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
      >
        Content
      </div>
    </div>
  );
}
