import Chapter from './Chapter';
import Header from './Header';
import Pagination from './Pagination';
import RascunhoTexto from './RascunhoTexto';
import GradeCorrecao from './GradeCorrecao';
import ProducaoTextoFinal from './ProducaoTextoFinal';
import CriteriosAvaliacao from './CriteriosAvaliacao';
import ChecklistAutoavaliacao from './ChecklistAutoavaliacao';
import GabaritoOnlineBanner from './GabaritoOnlineBanner';
import TermoGlossario from './TermoGlossario';
import Footer from './Footer';
import { useUserAnswers } from '../hooks/useUserAnswers';
import { usePagination } from '../hooks/usePagination';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { publicUrl } from '../lib/publicUrl';

/** Mesmo destino do QR em public/images/qrCode.png */
const TUTORIAL_URL = 'https://pt.wikipedia.org';

function Book() {
  const { userAnswers, handleAnswerChange } = useUserAnswers();
  const { currentPage, scrollToTop } = usePagination();

  // Restaura a posição de scroll salva
  useScrollPosition();

  return (
    <div className="min-h-screen bg-gray-200 w-full">
      <div className="mx-auto bg-white shadow-2xl overflow-hidden w-full md:max-w-[63%]" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Header />
        <Pagination currentPage={4} attachToHeader />

        <div className="p-8 md:p-12">
          {/* Conteúdo do Capítulo 1 */}
          <Chapter
            content={
              <>
                <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <h1 className="shrink-0 !mb-0">
                      <strong>Texto dissertativo-argumentativo</strong>
                    </h1>

                    <div
                      className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-black pt-3 text-[13px] font-bold uppercase tracking-wide"
                      style={{ color: '#000', fontFamily: 'Ubuntu, sans-serif' }}
                    >
                      <span>BNCC</span>
                      <span aria-hidden="true" className="font-normal">
                        |
                      </span>
                      <span>Henihil milicita soluptatur?</span>
                      <span aria-hidden="true" className="font-normal">
                        |
                      </span>
                      <span>As endi quodit quatus</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <a
                      href={TUTORIAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir tutorial"
                      className="block"
                    >
                      <img
                        src={publicUrl('images/qrCode.png')}
                        alt="QR Code do tutorial"
                        className="h-[110px] w-[110px] object-contain"
                      />
                    </a>
                    <p
                      className="mt-1.5 text-center text-sm"
                      style={{ color: '#1e2a4a', fontFamily: 'Ubuntu, sans-serif' }}
                    >
                      Clique no QRCode, ou leia-o, se preferir.
                    </p>
                  </div>
                </div>
                <div
                  className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t-4 border-black pt-5 tracking-wide"
                ></div>

                <p className="mb-4 indent-6">
                  Produzir um texto não é apenas organizar palavras em uma folha, mas sim exercer
                  sua cidadania e agir sobre a realidade social em que você vive. O gênero que guia o
                  Exame Nacional do Ensino Médio (Enem) e os principais processos seletivos do país
                  é o <strong>dissertativo-argumentativo</strong>, uma unidade em <TermoGlossario termo="prosa" significado="Prosa é a forma de escrita em parágrafos e períodos." /> que exige o desenvolvimento de uma tese central sustentada por uma progressão lógica de argumentos.
                </p>
                <p className="mb-4 indent-6">
                  Produzir um texto não é apenas organizar palavras em uma folha, mas sim exercer sua cidadania e agir sobre a realidade social em que você vive. O gênero que guia
                  o Exame Nacional do Ensino Médio (Enem) e os principais processos seletivos do
                  país é o dissertativo-argumentativo, uma unidade em prosa que exige o desenvolvimento de uma tese central sustentada por uma progressão lógica de argumentos.
                </p>
                <p className="mb-4 indent-6">
                  Sob a <TermoGlossario termo="perspectiva sociointeracionista da linguagem" significado="A perspectiva sociointeracionista da linguagem entende a língua como uma ferramenta de interação social e construção de conhecimento, não apenas um sistema de regras." />, a língua não é um
                  sistema estático de regras gramaticais, mas um meio de ação. Quando você escreve
                  uma redação, você está dialogando com um interlocutor global e racional, buscando
                  convencê-lo sobre a validade do seu ponto de vista. Diferente de gêneros puramente
                  informativos, como a notícia, em que o autor apenas relata fatos, na <TermoGlossario termo="dissertação-argumentativa" significado="Dissertar significa explicar, discutir e aprofundar o tema proposto, enquanto argumentar consiste em utilizar análises críticas e evidências para validar sua tese." /> é necessário assumir um posicionamento assertivo diante de uma
                  situação-problema de ordem social, científica, cultural ou política.
                </p>
                <p className="mb-4 indent-6">
                  O objetivo central deste gênero é a persuasão. Para convencer o leitor, não basta
                  emitir uma opinião baseada em “eu acho”; é necessário construir uma defesa apoiada
                  em argumentos consistentes, estruturados com coerência e coesão, formando uma
                  unidade textual indissociável.
                </p>
                <p className="mb-4 indent-6">
                  A tese é o coração do seu texto. Ela é a ideia central, o seu posicionamento sobre
                  o problema, que deve ser apresentado logo na introdução e guiado por todo o planejamento textual. Sem uma tese clara, a redação corre o risco de se tornar uma “colcha
                  de retalhos” de informações desconexas que não levam a lugar nenhum. Durante sua
                  jornada neste volume, você aprenderá que cada escolha — desde o vocabulário até
                  a ordem dos argumentos — deve servir para fortalecer esse ponto de vista central.
                </p>
                <p className="mb-4 indent-6">
                  A prática da escrita no Ensino Médio visa prepará-lo para os desafios acadêmicos e para a vida em sociedade, estimulando o pensamento crítico e a autonomia.
                  Dominar este gênero é dominar a arte de selecionar, organizar e interpretar informa
                  ções em defesa de uma causa, habilidade essencial para o sucesso no Enem e para
                  sua atuação como cidadão consciente.
                </p>
                <p className="mb-4 indent-6">
                  Ugit plic tecus exeriore verae. Est ut pre omnis ipienim quas dolupta erumet
                  experchit, optis dolecus utate lique sunti unt odios apiendias quidisq uatium voluptatibus nihillent, nam que audaess impella ccusandus escipiciis ilique que parchic
                  iliquataeces ma nonsequas de conem acilic to culpa int, sus. Bo. Parchita ped quia
                  venis aut perum eost qui cum doloreius et ut et que nectores volecus arcias explam
                  quiducia entio beriberovit et quundae re venimaio volorestia senectus idic to cus.
                  Namus adi sunt quae num rehenim enditatur re eos et el ipicipi ciisimp oreptatur sed
                  quiaesequia doluptatem et et ellande bitatur aut rempossitate estiatur sandebitem
                </p>




                <Pagination currentPage={5} />
                <p className="mb-4 indent-6">
                  eius, odionse quidem volorep roruntibus, venda
                  duciandamus pe molo que offic tecta sunt odiam
                  aliquatium sedigenda volorestorem dolut omnim
                  dolorec tendell endam, omnissimus, ut et eum rentia
                  sequiant. Bitatest, comni tem nis qui sita consequo
                  blabori blabo. Ucientium inus et explabo. Pa earum
                  velest facium re dolore qui blam, sum eosamusda
                  niste perio es moluptatquia nihicab iume comni
                  modi conetur sus, corepro blam sitatur rem rerrum
                  explige ntiore, ere explignam rehendi tatius dolu
                  pid quianima dolum rehendi pidebistem ius erum
                  audi nihicie ntorrum iunt vid quis cullaborum volup
                  tat la nonsequam ipsum faciam, ut occum re volupta
                  digende rspeditia voluptatas della plam, to il ipsant
                  latiorpore. Is everro et aut quam eum in repe sin reriti
                  santemq uiaepeles nes aut esecte volorero videnis
                  cium, volectur re nature di id quis ant occat.
                </p>
                <p className="mb-4 indent-6">
                  Bitaecta cum repel explaud ipsus, to doluptas
                  deliassitat ut de occatem quatusae officae volup
                  tatia vent is voluptatibus essequi des aut faceaqu
                  atatint. Antur? Pidem recte voluptium inus comni
                  ditas sinveni suntius rest, sed ut et aliquunt poreper.
                </p>
                <h4>Subtítulo 1</h4>
                <p className="mb-4 indent-6">
                  Inihiciis auta dis ipictem etur samet harchil laccull
                  endistio quisi digniminctur at ducipsumet mollacep
                  tam quae debis aut ma simoluptatae est expelique
                  alis re pa nis di vendigenimi, nonsequae volupitin
                  tem eaquam harum que nime re, siminctas dolori
                  tis volupta nobis di se es autem. Minvendis ipsantem
                  eatessi velesequunto eaquam, sit, offic tem quam
                  latur? Nus molo exerchita ipsum esciet, ium repudae
                  nonsed exersperibus conserc hiliquis dolorem ne
                  idel eosapicimin reribus tiatempel iducid quaesten
                  dit, sequide litiis expero ea dellor aut rectam ellec
                  tur, temque doloratatae volupta alique vel is abo. Et
                  reiundi onsectius.
                </p>
                <p className="mb-4 indent-6">
                  Evel eatinusapic te remquati blaccus dis dolupta
                  spellendi acearch illeniae nonsequ isciur rernatis alisi
                  bea sunt volenih illoreptatia pro etur, omnihit utate
                  voluptu repelib usanis modi aut quis eos sitiaepre
                  quae corit, nis ex eum etur, ut et qui simenis rempos
                  trum untiumet est viditec estiam dolupta ssendi
                  iusciet arciaepudit, od ma dicipsunt aut vollant acit
                  laboreprest eumquuntotae eicae por apienis qui
                  blaceatiost eruptatur, opta dolut lanimagnis natiore
                  maximodi doloratis explaccat moluptae vendipsun
                  dam quod molenditi te doloreptate solo ilignis molu
                  pis vidisitas sintore mpostiae. Ut aut alia dem facidus
                  venis nonsece prorum expelis estet, simpori tatusae
                  plignihil excest, sit, cus eliquas sam nonsedi gendis voluptae doluptatur? Ximet volupitae veriat apella
                  borent mi, qui berae nonsequ atiasita dolupta tibus,
                  endant volum qui quae doloribus se et dolore, nobis
                  dit es as ut im harcit, nectur? Accabore et dolupta
                  ipsum que re cum eseque por accullam ea qui nesci
                  corro eleceat laboratur? Quiat.
                </p>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img
                    src="images/page_4_img_306_56.png"
                    className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
                  />
                  <p className="text-[10px] text-slate-600 mt-2" style={{ fontSize: '10px' }}>stock.adobe.com
                  </p>
                  <div className="border-l-[2px] border-[#3b4394] pl-2 mb-1">
                    <p className="text-[10px]" style={{ fontSize: '10px' }}>Eliquis del eatur? Quis sunt od ute exceatur?
                      Gitatur, corehen istionet intiisq uamusap isquiberro
                      voluptat que aditatatibus moluptaquia imustent
                    </p>
                  </div>
                </div>
                <p className="mb-4 indent-6">
                  Bitatest, comni tem nis qui sita consequo
                  blabori blabo. Ucientium inus et explabo. Pa earum
                  velest facium re dolore qui blam, sum eosamusda
                  niste perio es moluptatquia nihicab iume comni
                  modi conetur sus, corepro blam sitatur rem rerrum
                  explige ntiore, ere explignam rehendi tatius dolu
                  pid quianima dolum rehendi pidebistem ius erum
                  audi nihicie ntorrum iunt vid quis cullaborum volup
                  tat la nonsequam ipsum faciam, ut occum re volupta
                  digende rspeditia voluptatas della plam, to il ipsant
                  latiorpore. Is everro et aut quam eum in repe sin reriti
                  santemq uiaepeles nes aut esecte volorero videnis
                  cium, volectur re nature di id quis ant occat.
                </p>
                <p className="mb-4 indent-6">
                  Aditatur, iumquod qui conserit ut illigen daepe
                  runt volum, nos sam ad etur? Ustion reperiberume
                  cum aut facculparum quis imentur? Quia quodi
                  apel expligendae dunt, consed mo et in conem
                  posti ommo volorum, sent occuscietur atur? Ed
                  ma sum a aut accab ipsaest pa quaecte mporerent
                  quas qui odit dundusa prat dio beaquostrum adici
                  piti nimus as eostrum ut laut laccupta que este
                  mque eumquam, comnihi llores vitatiur, tecusa ditae
                  vero delitat ionsequi natio vellam ate si odis eaquae
                  dolupta praeribusam, omnia venemodi rere, quasse
                  quae ex et peremporem fugiacomnis maximusa eria
                  tur maioreperia corende volestet, non nest ea volenia
                  nustore molorem alit que plant. Axim quodiatquo te
                  perem volo qui sit autEquos alit, vide pedis et ulpa
                  non cus excesciant.
                </p>

                <Pagination currentPage={6} />
                <p className="mb-4 indent-6">
                  Produzir um texto não é apenas orga
                  nizar palavras em uma folha, mas sim
                  exercer sua cidadania e agir sobre a realidade social em que você vive. O gênero
                  que guia o Exame Nacional do Ensino
                  Médio (Enem) e os principais processos
                  seletivos do país é o <strong>dissertativo-argumentativo</strong>, uma unidade em <strong style={{ color: '#8c2f88' }}>prosa</strong> que
                  exige o desenvolvimento de uma tese
                  central sustentada por uma progressão
                  lógica de argumentos.
                </p>
                <p className="mb-4 indent-6">
                  Produzir um texto não é apenas
                  organizar palavras em uma folha, mas
                  sim exercer sua cidadania e agir sobre
                  a realidade social em que você vive. O
                  gênero que guia o Exame Nacional do
                  Ensino Médio (Enem) e os principais
                  processos seletivos do país é o dissertativo-argumentativo, uma unidade em
                  prosa que exige o desenvolvimento de
                  uma tese central sustentada por uma
                  progressão lógica de argumentos.
                </p>
                <p className="mb-4 indent-6">
                  Sob a <strong style={{ color: '#8c2f88' }}>perspectiva sociointeracionista da linguagem</strong>, a língua não é
                  um sistema estático de regras gramaticais, mas um meio de ação. Quando
                  você escreve uma redação, você está
                  dialogando com um interlocutor global
                  e racional, buscando convencê-lo
                  sobre a validade do seu ponto de vista.
                  Diferente de gêneros puramente informativos, como a notícia, em que o autor
                  apenas relata fatos, na <strong>dissertação-argumentativa</strong> é necessário assumir
                  um posicionamento assertivo diante
                  de uma situação-problema de ordem
                  social, científica, cultural ou política.
                </p>
                <p className="mb-4 indent-6">
                  O objetivo central deste gênero é a
                  persuasão. Para convencer o leitor, não
                  basta emitir uma opinião baseada em
                  “eu acho”; é necessário construir uma
                  defesa apoiada em argumentos consis
                  tentes, estruturados com coerência e
                  coesão, formando uma unidade textual
                  indissociável.
                </p>
                <p className="mb-4 indent-6">
                  A tese é o coração do seu texto. Ela
                  é a ideia central, o seu posicionamento
                  sobre o problema, que deve ser apresentado logo na introdução e guiado
                  por todo o planejamento textual. Sem
                  uma tese clara, a redação corre o risco de se tornar uma “colcha de retalhos”
                  de informações desconexas que não
                  levam a lugar nenhum. Durante sua
                  jornada neste volume, você aprenderá
                  que cada escolha — desde o vocabulá
                  rio até a ordem dos argumentos — deve
                  servir para fortalecer esse ponto de vista
                  central.
                </p>
                <p className="mb-4 indent-6">
                  A prática da escrita no Ensino
                  Médio visa prepará-lo para os desafios
                  acadêmicos e para a vida em sociedade,
                  estimulando o pensamento crítico e
                  a autonomia. Dominar este gênero é
                  dominar a arte de selecionar, organizar
                  e interpretar informações em defesa de
                  uma causa, habilidade essencial para
                  o sucesso no Enem e para sua atuação
                  como cidadão consciente.
                </p>
                <p className="mb-4 indent-6">
                  Ugit plic tecus exeriore verae. Est
                  ut pre omnis ipienim quas dolupta
                  erumet experchit, optis dolecus utate
                  lique sunti unt odios apiendias quidisq
                  uatium voluptatibus nihillent, nam
                  que audaess impella ccusandus esci
                  piciis ilique que parchic iliquataeces
                  ma nonsequas de conem acilic to culpa
                  int, sus. Bo. Parchita ped quia venis aut
                  perum eost qui cum doloreius et ut et
                  que nectores volecus arcias explam
                  quiducia entio beriberovit et quundae
                  re venimaio volorestia senectus idic to
                  cus. Namus adi sunt quae num rehenim
                  enditatur re eos et el ipicipi ciisimp orep
                  tatur sed quiaesequia doluptatem et et
                  ellande bitatur aut rempossitate estiatur
                  sandebitem eius, odionse quidem volo
                  rep roruntibus, venda duciandamus pe
                  molo que offic tecta sunt odiam aliqua
                  tium sedigenda volorestorem dolut
                  omnim dolorec tendell endam, omnissi
                  mus, ut et eum rentia sequiant. Bitatest,
                  comni tem nis qui sita consequo blabori
                  blabo. Ucientium inus et explabo. Pa
                  earum velest facium re dolore qui blam,
                  sum eosamusda niste perio es molup
                  tatquia nihicab iume comnimodi cone
                  tur sus, corepro blam sitatur rem rerrum
                  explige ntiore, ere explignam rehendi
                  tatius dolupid quianima dolum rehendi
                  pidebistem ius erum audi nihicie ntor
                  rum iunt vid quis cullaborum voluptat la
                  nonsequam ipsum faciam, ut occum re
                </p>



                <Pagination currentPage={7} />
                <h4>Subtítulo 1</h4>
                <p className="mb-4 indent-6">
                  Inihiciis auta dis ipictem etur samet harchil laccull endistio quisi digniminctur at ducipsumet mollaceptam quae
                  debis aut ma simoluptatae est expelique alis re pa nis di vendigenimi, nonsequae volupitintem eaquam harum
                  que nime re, siminctas doloritis volupta nobis di se es autem. Minvendis ipsantem eatessi velesequunto eaquam,
                  sit, offic tem quam latur? Nus molo exerchita ipsum esciet, ium repudae nonsed exersperibus conserc hiliquis
                  dolorem ne idel eosapicimin reribus tiatempel iducid quaestendit, sequide litiis expero ea dellor aut rectam ellec
                  tur, temque doloratatae volupta alique vel is abo. Et reiundi onsectius.
                </p>
                <p className="mb-4 indent-6">
                  Evel eatinusapic te remquati blaccus dis dolupta spellendi acearch illeniae nonsequ isciur rernatis alisi bea
                  sunt volenih illoreptatia pro etur, omnihit utate voluptu repelib usanis modi aut quis eos sitiaepre quae corit, nis
                  ex eum etur, ut et qui simenis rempostrum untiumet est viditec estiam dolupta ssendi iusciet arciaepudit, od ma
                  dicipsunt aut vollant acit laboreprest eumquuntotae eicae por apienis qui blaceatiost eruptatur, opta dolut lani
                  magnis natiore maximodi doloratis explaccat moluptae vendipsundam quod molenditi te doloreptate solo ilig
                  nis molupis vidisitas sintore mpostiae. Ut aut alia dem facidus venis nonsece prorum expelis estet, simpori tatusae
                  plignihil excest, sit, cus eliquas sam nonsedi gendis voluptae doluptatur? Ximet volupitae veriat apellaborent mi,
                  qui berae nonsequ atiasita dolupta tibus, endant volum qui quae doloribus se et dolore, nobis dit es as ut im harcit,
                  nectur? Accabore et dolupta ipsum que re cum eseque por accullam ea qui nesci corro eleceat laboratur? Quiat.
                </p>
                <p className="mb-4 indent-6">
                  Bitatest, comni tem nis qui sita consequo blabori blabo. Ucientium inus et explabo. Pa earum velest facium
                  re dolore qui blam, sum eosamusda niste perio es moluptatquia nihicab iume comnimodi conetur sus, corepro
                  blam sitatur rem rerrum explige ntiore, ere explignam rehendi tatius dolupid quianima dolum rehendi pidebistem
                  ius erum audi nihicie ntorrum iunt vid quis cullaborum voluptat la nonsequam ipsum faciam, ut occum re volupta
                  digende rspeditia voluptatas della plam, to il ipsant latiorpore. Is everro et aut quam eum in repe sin reriti santemq
                  uiaepeles nes aut esecte volorero videniscium, volectur re nature di id quis ant occat.
                </p>
                <p className="mb-4 indent-6">
                  Aditatur, iumquod qui conserit ut illigen daeperunt volum, nos sam ad etur? Ustion reperiberume cum aut
                  facculparum quis imentur? Quia quodi apel expligendae dunt, consed mo et in conemposti ommo volorum, sent
                  occuscietur atur? Ed ma sum a aut accab ipsaest pa quaecte mporerent quas qui odit dundusa prat dio beaquos
                  trum adicipiti nimus as eostrum ut laut laccupta que estemque eumquam, comnihi llores vitatiur, tecusa ditae
                  vero delitat ionsequi natio vellam ate si odis eaquae dolupta praeribusam, omnia venemodi rere, quassequae ex
                  et peremporem fugiacomnis maximusa eriatur maioreperia corende volestet, non nest ea volenia nustore molo
                  rem alit que plant. Axim quodiatquo te perem volo qui sit autEquos alit, vide pedis et ulpa non cus excesciant.
                </p>
                <h4>Subtítulo 1</h4>
                <p className="mb-4 indent-6">
                  Inihiciis auta dis ipictem etur samet harchil laccull endistio quisi digniminctur at ducipsumet mollaceptam quae
                  debis aut ma simoluptatae est expelique alis re pa nis di vendigenimi, nonsequae volupitintem eaquam harum
                  que nime re, siminctas doloritis volupta nobis di se es autem. Minvendis ipsantem eatessi velesequunto eaquam,
                  sit, offic tem quam latur? Nus molo exerchita ipsum esciet, ium repudae nonsed exersperibus conserc hiliquis
                  dolorem ne idel eosapicimin reribus tiatempel iducid quaestendit, sequide litiis expero ea dellor aut rectam ellec
                  tur, temque doloratatae volupta alique vel is abo. Et reiundi onsectius.
                </p>
                <p className="mb-4 indent-6">
                  Evel eatinusapic te remquati blaccus dis dolupta spellendi acearch illeniae nonsequ isciur rernatis alisi bea
                  sunt volenih illoreptatia pro etur, omnihit utate voluptu repelib usanis modi aut quis eos sitiaepre quae corit, nis
                  ex eum etur, ut et qui simenis rempostrum untiumet est viditec estiam dolupta ssendi iusciet arciaepudit, od ma
                  dicipsunt aut vollant acit laboreprest eumquuntotae eicae por apienis qui blaceatiost eruptatur, opta dolut lani
                  magnis natiore maximodi doloratis explaccat moluptae vendipsundam quod molenditi te doloreptate solo ilig
                  nis molupis vidisitas sintore mpostiae. Ut aut alia dem facidus venis nonsece prorum expelis estet, simpori tatusae
                  plignihil excest, sit, cus eliquas sam nonsedi gendis voluptae doluptatur? Ximet volupitae veriat apellaborent mi,
                  qui berae nonsequ atiasita dolupta tibus, endant volum qui quae doloribus se et dolore, nobis dit es as ut im harcit,
                  nectur? Accabore et dolupta ipsum que re cum eseque por accullam ea qui nesci corro eleceat laboratur? Quiat.
                  Ximoluptur? Sus, te cum que ea duciam, consequam volessecum facit int aut utem que pro tet quam dolo ipsan
                  tin pratem ressitia vel in pos quis dis ipsuntur?
                </p>
                <Pagination currentPage={8} />
                <h2>Proposta de produção</h2>
                <h3>Redação diagnóstica</h3>
                <p className="mb-4 indent-6">Este é o momento de colocarmos em prática os conceitos fundamentais que revisamos. A redação diagnóstica
                  tem como objetivo verificar seu ponto de partida na escrita dissertativo-argumentativa, permitindo identificar
                  suas potencialidades e os aspectos que precisaremos aprimorar ao longo deste volume.</p>
                <p className="mb-4 indent-6" style={{ color: '#575656', fontWeight: 'bold', fontSize: '20px' }}>Instruções para a escrita:</p>
                <ol className="list-decimal marker:text-[#80298F] ml-6">
                  <li>O texto definitivo deve ser redigido com caneta esferográfica de tinta preta. </li>
                  <li>A extensão do texto deve ser de, no mínimo, 8 e, no máximo, 30 linhas. </li>
                  <li>Produções com 7 linhas ou menos serão classificadas como “texto insuficiente” e receberão nota zero. </li>
                  <li>É proibida a cópia literal de trechos dos textos motivadores. As linhas que contiverem cópia integral serão
                    desconsideradas para efeito de correção e contagem de linhas. </li>
                  <li>Fuga total ao tema ou não atendimento ao tipo dissertativo-argumentativo anularão sua prova. </li>
                  <li>Não assine o texto nem insira desenhos ou marcas de identificação fora do local designado. </li>
                </ol>
                <p className="mb-4 indent-6" style={{ color: '#575656', fontWeight: 'bold', fontSize: '20px' }}>Textos motivadores</p>
                <p className="mb-4 indent-6"><strong>TEXTO I: </strong></p>
                <p className="mb-4 indent-6">
                  A Lei nº 13.415/2017 alterou a Lei de Diretrizes e
                  Bases da Educação Nacional e estabeleceu uma
                  mudança na estrutura do Ensino Médio, ampliando
                  o tempo mínimo do estudante na escola e definindo uma nova organização curricular. Essa estrutura contempla a Base Nacional Comum Curricular
                  (BNCC) e a oferta de itinerários formativos, focando
                  em áreas do conhecimento e na formação técnica.
                  O objetivo é aproximar a escola da realidade dos
                  estudantes, considerando as demandas do mundo
                  do trabalho e da vida em sociedade. No entanto,
                  a implementação enfrenta desafios estruturais e
                  dúvidas de docentes sobre o trabalho por áreas de
                  conhecimento.
                </p>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  HOUAISS, A.; VILLAR, M. S. <strong>Dicionário Houaiss da
                    língua portuguesa</strong>. Rio de Janeiro: <em>Objetiva</em>, 2009
                  (adaptado).
                </p>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img
                    src="images/page_7_img_290_405.png"
                    className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
                  />
                  <p className="text-[10px] text-slate-600 mt-2" style={{ fontSize: '10px' }}>stock.adobe.com
                  </p>
                  <div className="border-l-[2px] border-[#3b4394] pl-2 mb-1">
                    <p className="text-[10px]" style={{ fontSize: '10px' }}>Eliquis del eatur? Quis sunt od ute exceatur?
                      Gitatur, corehen istionet intiisq uamusap isquiberro
                      voluptat que aditatatibus moluptaquia imustent
                    </p>
                  </div>
                </div>
                <p className="mb-4 indent-6"><strong>TEXTO II: </strong></p>
                <p className="mb-4 indent-6">
                  A desigualdade no Brasil abrange os âmbitos
                  econômico, social e, principalmente, o da educação.
                  Negros representam a maioria da população brasileira, mas estão na minoria em espaços de liderança.
                </p>
                <Pagination currentPage={9} />
                <p className="mb-4 indent-6">O quadro da desigualdade social entre negros e brancos ocorre em função dessa diferença histórica de
                  oportunidades. Conforme dados do IBGE, a diferença
                  no nível de escolaridade se reflete diretamente na
                  renda, perpetuando abismos sociais que precisam ser
                  enfrentados por meio de ações afirmativas e políticas
                  públicas eficazes.</p>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  HOUAISS, A.; VILLAR, M. S. <strong>Dicionário Houaiss da
                    língua portuguesa</strong>. Rio de Janeiro: <em>Objetiva</em>, 2009
                  (adaptado).
                </p>
                <p className="mb-4 indent-6"><strong>TEXTO III: </strong></p>
                <p className="mb-4 indent-6">
                  Estar excluído da internet, no século XXI,
                  é estar excluído da sociedade. O escritor Yuval Noah
                  Harari defende que a diferença competitiva entre
                  quem possui e quem não possui acesso à informação pode criar a sociedade mais desigual da história.
                  Embora a internet possa ser uma ponte, ela também
                  ameaça aumentar a brecha entre as classes sociais
                  caso o acesso continue precário para as camadas mais
                  pobres da população.
                </p>
                <p className="mb-4 indent-6" style={{ color: '#80298F', fontWeight: 'bold', fontSize: '20px' }}>Tema de redação:</p>
                <p className="mb-4 indent-6">A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema
                  <strong>“A importância da formação educacional e tecnológica para a juventude brasileira no século XXI”</strong>, apresentando proposta de intervenção que respeite os direitos humanos. Selecione, organize e relacione, de forma
                  sentando proposta de intervenção que respeite os direitos humanos. Selecione, organize e relacione, de forma
                  coerente e coesa, argumentos e fatos para a defesa de seu ponto de vista.</p>
                <RascunhoTexto instanceId="producaoTexto2" />
                <Pagination currentPage={10} />
                <h2>Anatomia da Redação NOTA 1000</h2>
                <p className="mb-4 indent-6">
                  A nota máxima em uma redação de vestibular ou do Enem é fruto de um projeto de texto rigoroso, do domínio
                  de estruturas linguísticas e da aplicação estratégica de conhecimentos. Nesta seção, vamos realizar uma “dissecação” pedagógica de uma redação real para entender como cada engrenagem do texto dissertativo-argumentativo
                  funciona para convencer o leitor e atender às exigências dos avaliadores.
                </p>
                <p className="mb-4 indent-6">
                  Estudar redações nota 1000 não significa buscar um modelo a ser copiado mecanicamente, mas sim compreender a lógica por trás da construção. Um texto nota máxima é aquele que não apresenta falhas de projeto, ou seja,
                  todas as promessas feitas na introdução são cumpridas no desenvolvimento e solucionadas na conclusão. Para
                  nossa análise, utilizaremos como base a redação de Isabella Barros Castelo Branco, que obteve nota máxima no
                  Enem 2017, cujo tema foi “Desafios para a formação educacional de surdos no Brasil”.
                </p>
                <h3>Texto base para análise:</h3>
                <div
                  className="mx-auto my-5 grid w-full max-w-[940px] grid-cols-1 gap-3 lg:grid-cols-[160px_minmax(0,580px)_160px] lg:items-start lg:justify-center lg:gap-5"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 14,
                    color: '#1a1a1a',
                  }}
                >
                  {/* Legenda roxa — esquerda no desktop; depois da carta no mobile */}
                  <aside
                    className="order-2 self-start p-3 text-[13px] leading-snug text-black lg:order-none lg:col-start-1 lg:sticky lg:top-4"
                    style={{ backgroundColor: '#ccadd3' }}
                  >
                    Magni ulpa quodi sendit voluptur? Udae volorro volorec
                    atusdae cepernat enet es et qui volorae doluptas eos
                    rerit lam hilicidem nis expedic iderum qui bearupt
                    atquosani del ilis minus.
                    <br />
                    ipic tem reped mo omnissi mustior alissitatio.
                    ItaspieneDolorionet laut vendis eossequo optatium
                    quibearum essin cuptatqui dolut fugia velenit iostemo
                    in ea coreperiam, samus rem elicia verchitist quae
                    dolorios solupta intiandipsa conserro consequ aectore
                    henimin etur? Quid evendistrum quatioria dolut hit
                    is cus isitat.cum antionsecaes mo ex et audanim oluptat.
                  </aside>

                  {/* Carta / redação */}
                  <div
                    className="order-1 relative w-full border-2 border-[#3c1a5b] bg-white p-4 sm:p-6 lg:order-none lg:col-start-2 lg:p-[30px]"
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: 16,
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    <div
                      className="pointer-events-none absolute z-[1] hidden border-b-2 border-dotted border-[#a0589e] lg:block"
                      style={{ top: 78, left: 0, width: 200 }}
                    />
                    <div
                      className="pointer-events-none absolute z-[1] hidden border-b-2 border-dotted border-[#caad7e] lg:block"
                      style={{ bottom: 42, left: 160, width: 420 }}
                    />

                    <div className="relative z-[2] mb-4">
                      <span style={{ backgroundColor: '#ccadd3' }}>
                        “Na mitologia grega, Sísifo foi condenado pelos
                        deuses a empurrar uma pedra até o topo de uma
                        montanha, apenas para vê-la rolar de volta ao início
                        todos os dias. Fora da ficção, a realidade de muitos
                        surdos no Brasil assemelha-se a esse castigo eterno:
                        a luta pelo acesso à educação de qualidade enfrenta
                        barreiras que parecem intransponíveis. Nesse
                        contexto, a negligência governamental e o precon
                        ceito enraizado na sociedade brasileira configuram
                        os principais desafios para a efetiva formação educa
                        cional desse grupo social. Assim, urge analisar como
                        a precariedade das políticas públicas e o estigma
                        social dificultam a inclusão desses cidadãos.[JK4.1]
                      </span>
                    </div>

                    <div className="relative z-[2] mt-6">
                      <span style={{ backgroundColor: '#fdd99e' }}>
                        Atenciosas Em primeira análise, é fundamental destacar
                        que a insuficiência de infraestrutura nas instituições
                        de ensino compromete o aprendizado dos deficien
                        tes auditivos. Embora a Lei nº 13.146/2015 assegure
                        o sistema educacional inclusivo, a prática revela um
                        abismo entre o texto legal e a realidade das salas de
                        aula. Muitas escolas carecem de intérpretes de Libras
                        e de materiais adaptados, o que isola o aluno surdo
                        e retarda seu desenvolvimento intelectual. Segundo
                        o pensamento de Talcott Parsons, a escola deve atuar
                        como um microssistema social que prepara o indiví
                        duo para a vida coletiva; contudo, se esse ambiente
                        é excludente, o Estado falha em seu papel primordial
                        de garantir o direito à educação.
                      </span>
                      <br />
                      <span style={{ backgroundColor: '#fdd99e' }}>
                        Ademais, a mentalidade coletiva brasileira,{' '}
                      </span>
                    </div>
                  </div>

                  {/* Legenda laranja — direita no desktop; no fim no mobile */}
                  <aside
                    className="order-3 self-start p-3 text-[13px] leading-snug text-black lg:order-none lg:col-start-3 lg:self-end"
                    style={{ backgroundColor: '#fdd99e' }}
                  >
                    Despedida e identificação do remetente.
                  </aside>
                </div>

                <Pagination currentPage={11} />
                <div
                  className="mx-auto my-5 grid w-full max-w-[940px] grid-cols-1 gap-3 lg:grid-cols-[160px_minmax(0,580px)_160px] lg:items-start lg:justify-center lg:gap-5"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 14,
                    color: '#1a1a1a',
                  }}
                >
                  {/* Legenda roxa — esquerda no desktop; depois da carta no mobile */}
                  <aside
                    className="order-2 self-start p-3 text-[13px] leading-snug text-black lg:order-none lg:col-start-1 lg:sticky lg:top-4"
                    style={{ backgroundColor: '#a8c6b1' }}
                  >
                    Magni ulpa quodi sendit voluptur? Udae volorro volorec
                    atusdae cepernat enet es et qui volorae doluptas eos
                    rerit lam hilicidem nis expedic iderum qui bearupt
                    atquosani del ilis minus.
                    <br />
                    ipic tem reped mo omnissi mustior alissitatio.
                    ItaspieneDolorionet laut vendis eossequo optatium
                    quibearum essin cuptatqui dolut fugia velenit iostemo
                    in ea coreperiam, samus rem elicia verchitist quae
                    dolorios solupta intiandipsa conserro consequ aectore
                    henimin etur? Quid evendistrum quatioria dolut hit
                    is cus isitat.cum antionsecaes mo ex et audanim oluptat.
                  </aside>

                  {/* Carta / redação */}
                  <div
                    className="order-1 relative w-full border-2 border-[#3c1a5b] bg-white p-4 sm:p-6 lg:order-none lg:col-start-2 lg:p-[30px]"
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: 16,
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    <div
                      className="pointer-events-none absolute z-[1] hidden border-b-2 border-dotted border-[#66a685] lg:block"
                      style={{ top: 78, left: 0, width: 200 }}
                    />
                    <div
                      className="pointer-events-none absolute z-[1] hidden border-b-2 border-dotted border-[#caad7e] lg:block"
                      style={{ bottom: 42, left: 160, width: 420 }}
                    />


                    <div className="relative z-[2] mt-6">
                      <span style={{ backgroundColor: '#fdd99e' }}>
                        marcada por um viés capacitista, agrava a exclusão
                        desse grupo. De acordo com o conceito de ‘Violência
                        Simbólica’ de Pierre Bourdieu, as instituições sociais
                        reproduzem padrões de dominação que silenciam as
                        minorias. No caso dos surdos, a ausência de diálogo
                        e o desconhecimento da Libras por parte da maioria da população criam barreiras comunicativas que
                        impedem a integração social. Esse cenário é reforçado pela mídia que, muitas vezes, falha em representar a diversidade, tratando a surdez como uma
                        limitação absoluta e não como uma característica
                        identitária.[JK5.1]
                      </span>
                    </div>
                    <div className="relative z-[2] mt-6">
                      <span style={{ backgroundColor: '#a8c6b1' }}>
                        Portanto, medidas são necessárias para mitigar esse impasse. Cabe ao Ministério da Educação
                        ampliar o investimento em escolas bilíngues, por
                        meio da contratação de intérpretes de Libras e da
                        capacitação docente em todo o território nacional,
                        com o intuito de garantir um ensino especializado
                        e de qualidade. Paralelamente, as instituições de
                        ensino, em parceria com as famílias, devem promover projetos pedagógicos que valorizem as diferenças e combatam o capacitismo. Somente assim, o
                        Brasil poderá superar o castigo de Sísifo e assegurar a
                        plena cidadania aos seus povos originários e surdos.”
                      </span>
                    </div>
                    <div className="relative z-[2] mt-6">
                      <span style={{ backgroundColor: '#acd5f3' }}>
                        Rit es comnihit eosa cus et ant officiist, optaecte
                        veliti sitio. Ilicaer chicienitam quatio. Musto con
                        nis eturepudam hillam harumquod qui culpa es et
                        quam, sant a et aut utecum fugia voluptis diti unt.
                      </span>
                    </div>
                    <div className="relative z-[2] mt-6">
                      <span style={{ backgroundColor: '#f6bed9' }}>
                        Omnim num nectas eveles magnatum diorro
                        riti ut que coreper rovitaq uoditem quid mi, ut que
                        sequi res utempor estorpo rporiore corum reperiate
                        quiatur? Ibeatem nit, suntur aut quasimo luptatis
                        essi invendant ex et am, ventem ipic tenist optatis
                        estrumet lam de pro experessum et landandit alig
                        niae conet, temporessim qui abor sunt, nos enducip
                        sunditibus.
                      </span>
                    </div>
                    <div className="relative z-[2] mt-6">
                      <span style={{ backgroundColor: '#fbf4ad' }}>
                        Ci rae delignis duciissum quae pa porrovid ea
                        quiam excepud andundempos ma idus sit od maior
                        rovit fuga. Itatur, seque quia eaquis net, tem qui re
                        voluptat ario doluptae voloreh endaeperum et alibus
                      </span>
                    </div>
                  </div>

                  {/* Legenda laranja — direita no desktop; no fim no mobile */}
                  <aside
                    className="order-3 self-start p-3 text-[13px] leading-snug text-black lg:order-none lg:col-start-3 lg:self-end"
                    style={{ backgroundColor: '#fdd99e' }}
                  >
                    Magni ulpa quodi
                    sendit voluptur?
                    Udae volorro volorec
                    atusdae cepernat
                    enet es et qui volorae
                    doluptas eos rerit lam
                    hilicidem nis.
                  </aside>
                </div>
                <Pagination currentPage={12} />
                <h2>Proposta de Produção</h2>
                <h3>O conto na era digital</h3>
                <p className="mb-4 indent-6">
                  Chegou o momento de você assumir o papel de contista. Nesta atividade, utilizaremos a estrutura da narrativa
                  curta para refletir sobre como as tecnologias digitais moldam nossas relações e comportamentos cotidianos.
                  Imagine a seguinte situação: a sua escola está organizando uma coletânea de contos inéditos produzidos por
                  estudantes, com o objetivo de lançar um livro digital intitulado “Conexões e Desconexões”. Você foi selecionado
                  para representar sua turma e deve escrever uma história que explore os impactos da vida on-line na subjetividade
                  do jovem contemporâneo.
                </p>
                <p className="mb-4 indent-6" style={{ color: '#80298F', fontWeight: 'bold', fontSize: '20px' }}>Instruções para a escrita:</p>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img
                    src="images/page_11_img_56_253.png"
                    className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
                  />
                  <p className="text-[10px] text-slate-600 mt-2" style={{ fontSize: '10px' }}>stock.adobe.com
                  </p>
                  <div className="border-l-[2px] border-[#3b4394] pl-2 mb-1">
                    <p className="text-[10px]" style={{ fontSize: '10px' }}>Eliquis del eatur? Quis sunt od ute exceatur?
                      Gitatur,.
                    </p>
                  </div>
                </div>
                <ol className="list-decimal marker:text-[#80298F] ml-6">
                  <li> O texto deve ter no mínimo 20 e no máximo 30 linhas e possuir um título criativo que atraia o leitor. </li>
                  <li> Siga obrigatoriamente a estrutura do gênero conto: apresente um enredo curto, personagens limitados e
                    foque em um único conflito central. </li>
                  <li> O tema deve obrigatoriamente ter relação com o eixo Cultura Digital e Sociedade. Você pode abordar, por
                    exemplo, o vício em celular, a solidão nas redes sociais, as <em>fake news</em> ou a busca por aprovação virtual. </li>
                  <li> Utilize a modalidade escrita padrão da língua portuguesa, permitindo marcas de coloquialidade apenas se
                    forem necessárias para a caracterização de falas de personagens. </li>
                  <li> Faça uso de elementos coesivos para garantir que a transição entre as cenas e o tempo da história seja
                    clara e fluida. </li>

                </ol>
                <p className="mb-4 indent-6" style={{ color: '#80298F', fontWeight: 'bold', fontSize: '20px' }}>Roteiro de apoio para criação</p>
                <ul className="list-disc marker:text-[#80298F] ml-6">
                  <li> <strong>Protagonista:</strong> Quem é essa pessoa? Como ela se relaciona com a tecnologia no dia a dia?  </li>
                  <li> <strong>Conflito:</strong> Qual evento rompe a rotina desse personagem? (Ex: a bateria acaba em um momento crucial;
                    uma mensagem enviada por engano; o silêncio de uma notificação que não chega).  </li>
                  <li> <strong>Espaço:</strong> Onde a história acontece? (Pode ser um quarto escuro, uma praça movimentada ou até o espaço
                    virtual de um chat).  </li>
                  <li> <strong>Desfecho:</strong> Como o conflito é resolvido? O final traz uma reflexão, uma surpresa ou deixa uma dúvida no ar?  </li>

                </ul>
                <Pagination currentPage={13} />
                <div style={{ border: '2px solid #27936a', padding: '10px', borderRadius: '5px' }}>
                  <h4>Lembre-se:</h4>
                  <p className="mb-4 indent-6">
                    Em um conto, <strong>“menos é mais”</strong>. Selecione
                    apenas as ações que são estritamente
                    necessárias para levar o leitor ao clímax.
                    Sua capacidade de selecionar informações
                    e organizá-las de forma estratégica será o
                    diferencial da sua narrativa.
                  </p>

                </div>
                <RascunhoTexto instanceId="producaoTexto3" />

                <Pagination currentPage={14} />
                <h2>Proposta de Produção</h2>
                <h3>Olhar crônico sobre a tecnologia</h3>
                <p className="mb-4 indent-6">
                  Chegou a hora de você exercitar sua capacidade de observação e escrita. Imagine que você é um dos membros
                  do grêmio estudantil da sua escola, responsável pela curadoria e produção de conteúdo para o jornal impresso
                  e digital da instituição. Ao notar como a tecnologia está onipresente nos corredores, nas salas de aula e até nos
                  intervalos, você sugeriu como pauta do mês a escrita de uma crônica que aborde o impacto das tecnologias
                  digitais na vida dos adolescentes. O objetivo é criar um texto que gere reflexão e identificação entre seus colegas, tratando o tema de forma criativa e bem estruturada.
                </p>
                <p className="mb-4 indent-6" style={{ color: '#80298F', fontWeight: 'bold', fontSize: '20px' }}>Instruções para a escrita:</p>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img
                    src="images/page_13_img_56_254.png"
                    className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
                  />
                  <p className="text-[10px] text-slate-600 mt-2" style={{ fontSize: '10px' }}>stock.adobe.com
                  </p>
                  <div className="border-l-[2px] border-[#3b4394] pl-2 mb-1">
                    <p className="text-[10px]" style={{ fontSize: '10px' }}>Eliquis del eatur? Quis sunt od ute exceatur?
                      Gitatur,.
                    </p>
                  </div>
                </div>
                <ol className="list-decimal marker:text-[#80298F] ml-6">
                  <li> O texto deve ter no mínimo 20 e no máximo 30 linhas e possuir um título atraente.  </li>
                  <li> A abordagem é livre, mas deve obrigatoriamente estar relacionada ao uso de tecnologias digitais
                    na sociedade, focando em algo próximo do cotidiano escolar (ex: o uso do celular durante as aulas,
                    a pressão por curtidas, os grupos de mensagem da turma, o impacto das fakes news no ambiente
                    estudantil etc.).  </li>
                  <li> Utilize a primeira pessoa (se quiser um tom mais pessoal/relato) ou a terceira pessoa (para um tom de
                    observador).  </li>
                  <li> Empregue a modalidade padrão da língua portuguesa, mas mantenha a leveza e a proximidade
                    características do gênero.  </li>
                  <li> Utilize uma variedade de conectivos e elementos de referência para garantir a coesão e evitar
                    repetições.  </li>
                </ol>
                <Pagination currentPage={15} />
                <ChecklistAutoavaliacao
                  instanceId="checklist_autoavaliacao"
                  title="Checklist de autoavaliação"
                  subtitle="(Baseado na C1 e C4)"
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  items={[
                    {
                      id: 'titulo',
                      label:
                        'Meu título desperta o interesse do leitor e tem relação com o tema?',
                    },
                    {
                      id: 'fato_cotidiano',
                      label: 'O texto parte de um fato ou observação do cotidiano?',
                    },
                    {
                      id: 'tom_coloquial',
                      label:
                        'Consegui manter um tom coloquial sem desrespeitar as regras essenciais da norma-padrão?',
                    },
                    {
                      id: 'sinonimos',
                      label:
                        'Utilizei sinônimos e pronomes para evitar a repetição de palavras como “tecnologia”, “celular” ou “internet”?',
                    },
                    {
                      id: 'conectivos',
                      label:
                        'Usei conectivos variados (mas, portanto, além disso, todavia) para ligar minhas ideias e parágrafos?',
                    },
                    {
                      id: 'encerramento',
                      label:
                        'O encerramento do meu texto traz uma reflexão ou fechamento claro sobre o que foi narrado?',
                    },
                  ]}
                />
                <div style={{ border: '2px solid #8c2f88', padding: '10px', borderRadius: '5px' }}>
                  <p className="mb-4 indent-6">
                    Nesta produção, o mais
                    importante é o seu
                    “olhar”. Procure enxergar
                    além da tela e conte
                    uma história que só você
                    poderia contar sobre a
                    sua geração e o mundo
                    digital. Sua produção
                    será avaliada conforme
                    a estrutura do gênero,
                    a adequação ao tema
                    e o uso expressivo dos
                    recursos de coesão
                    estudados.
                  </p>

                </div>
                <RascunhoTexto instanceId="producaoTexto4" />
                <Pagination currentPage={15} />
                <h2>Proposta de Produção</h2>
                <h3>Olhar crônico sobre a tecnologia</h3>
                <p className="mb-4 indent-6">
                  Chegou a hora de você exercitar sua capacidade de observação e escrita. Imagine que você é um dos membros
                  do grêmio estudantil da sua escola, responsável pela curadoria e produção de conteúdo para o jornal impresso
                  e digital da instituição. Ao notar como a tecnologia está onipresente nos corredores, nas salas de aula e até nos
                  intervalos, você sugeriu como pauta do mês a escrita de uma crônica que aborde o impacto das tecnologias
                  digitais na vida dos adolescentes. O objetivo é criar um texto que gere reflexão e identificação entre seus colegas, tratando o tema de forma criativa e bem estruturada.
                </p>
                <p className="mb-4 indent-6" style={{ color: '#80298F', fontWeight: 'bold', fontSize: '20px' }}>Instruções para a escrita:</p>

                <ol className="list-decimal marker:text-[#80298F] ml-6">
                  <li> O texto deve ter no mínimo 20 e no máximo 30 linhas e possuir um título atraente.  </li>
                  <li> A abordagem é livre, mas deve obrigatoriamente estar relacionada ao uso de tecnologias digitais
                    na sociedade, focando em algo próximo do cotidiano escolar (ex: o uso do celular durante as aulas,
                    a pressão por curtidas, os grupos de mensagem da turma, o impacto das fakes news no ambiente
                    estudantil etc.).  </li>
                  <li> Utilize a primeira pessoa (se quiser um tom mais pessoal/relato) ou a terceira pessoa (para um tom de
                    observador).  </li>
                  <li> Empregue a modalidade padrão da língua portuguesa, mas mantenha a leveza e a proximidade
                    características do gênero.  </li>
                  <li> Utilize uma variedade de conectivos e elementos de referência para garantir a coesão e evitar
                    repetições.  </li>
                </ol>
                <GabaritoOnlineBanner
                  href={TUTORIAL_URL}
                  items={[
                    {
                      prefix: '4.',
                      text: 'Accum eostet, aut autat posae reicienim estio. Ut utaepero quundae.',
                    },
                    {
                      prefix: '2.',
                      text: 'Icipiet dolum idunt eturiatus experiti aceatem acesciducius eium rem que.',
                    },
                  ]}
                />

                <Pagination currentPage={16} />
                <h2>Rumo à <strong>Redação Nota 1000</strong></h2>
                <RascunhoTexto instanceId="producaoTexto1" />
                <ProducaoTextoFinal />
              </>
            }
          />


        </div>

        <Footer />
      </div>

      {currentPage > 4 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 z-40 p-3 hover:scale-110 transition-all"
          title="Voltar ao início do livro"
        >
          <img src="images/setaTopo.png" alt="Voltar ao início do livro" />
        </button>
      )}
    </div>
  );
}

export default Book;
