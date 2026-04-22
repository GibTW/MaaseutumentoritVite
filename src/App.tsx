import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import DropdownFormButton from "./components/ButtonDropDown";

const text1 = (<> Maaseutumentorien hyvinvointipalvelut voivat auttaa sinua, jos koet haasteita:

        <ul>
        <li>työssäjaksamisessa</li>
        <li>ihmissuhteissa</li>
        <li>arjen vastoinkäymisissä</li>
        <li>muutostilanteissa</li>
        <li>uupumisen suhteen.</li>
        </ul>

 
Maaseutumentorit Oy jalkautuu asiakkaiden pariin liikkuvalla toimistolla. Hyvinvointipalvelut ovat aluksi kasvokkain tapahtuvia lähikontakteja, jonka jälkeen palvelu voi jatkua etävastaanottoina. Myös talouden neuvontaa saa halutessaan kotiovelle.
Hyvinvoitipalvelusta voit jättää yhteydenottopyynnön Hanna-Kaisalle, puhelimitse, tekstiviestillä tai sähköpostilla. Jaakko on yhteydessä asian tiimoilta mahdollisimman pian pyynnön jättämisen jälkeen.
</>)
const text2 = (
  <>"Tavoitteenani on edistää asiakkaan hyvinvointia löytämällä ratkaisuja työkyvyn ylläpitämiseksi ja kuormituksen hallitsemiseksi yhdessä asiakkaan kanssa.
Minulla on pitkä työkokemus kuuntelu-ukkona. Olen toiminut ihmisten huolten helpottajana toistakymmentä vuotta, ja kaikenlainen porinointi sujuu minulta luontevasti. 
Jotta voidaan keskustella säätä syvemmistä aiheista, täytyy luottamussuhde kyetä rakentamaan yhdessä asiakkaan kanssa.
Tämän jälkeen pulmien purkaminen ja vaihtoehtoisten toimintamallien löytäminen käy luontevammin. 
Joskus elämä lyö tielle puita poikittain ja tuo eteen haasteita, joita voi olla yksin hankala jäsentää. 
Näitä voimme yhdessä pähkäillä ja ohjata murheet pois päiväjärjestyksestä löytämällä uusia ratkaisuja arkeesi sinun yksilölliset tarpeesi huomioiden." <strong>Jaakko</strong>
</>)

export default function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Section
          text={<span style={{ fontSize: "22px" }}>{text1}</span>}
          imageSrc={`${import.meta.env.BASE_URL}images/image-1.jpg`}
          imageAlt="Hanna-Kaisa Kalmukoski & Jaakko Syrjäpalo"
          align="left"
        />

        <div className="divider" />

        <Section
          text={<span style={{ fontStyle: "italic", fontSize: "22px" }}>{text2}</span>}
          imageSrc={`${import.meta.env.BASE_URL}images/jaakko.png`}
          imageAlt="Jaakko"
          align="right"
        />

        <div className="divider" />

        
        <Section
        imageAlt=""
        imageSrc=""
        text={
          <div className="section__buttoncontainer">
            <DropdownFormButton></DropdownFormButton>
          </div>
          }
        />
      </main>

      <Footer />
    </div>
  );
}