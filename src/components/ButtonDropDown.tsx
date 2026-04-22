import { useEffect, useId, useRef, useState } from "react";
import Button from "./Button";

export default function DropdownFormButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <div className="dropdown" ref={wrapperRef}>
      <Button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        Ota meihin yhteyttä
      </Button>

      {open && (
        <div id={panelId} className="dropdown__panel">
          <form className="dropdown__form" onSubmit={handleSubmit}>
            <label>
              Nimi
              <input type="text" name="nimi"/>
            </label>

            <label>
              Sähköposti
              <input type="email" name="sähköposti" />
            </label>

            <label>
              Puhelinnumero
              <input type="text" name="puh"/>
            </label>

            <label>
              Vastaanottaja:
              <div>
              <text>Hanna-Kaisa</text>
              <input type="checkbox"/>
              </div>
              <div>
              <text>Jaakko</text>
              <input type="checkbox"/>
              </div>
            </label>

            <label>
              Yhteydenoton aihe
              <input type="text"/>
            </label>


            <div className="dropdown__actions">
              <Button type="submit" variant="send">Lähetä</Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Peruuta
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}