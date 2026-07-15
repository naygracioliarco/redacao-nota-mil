import Chapter from './Chapter';
import Header from './Header';
import Pagination from './Pagination';
import RascunhoTexto from './RascunhoTexto';
import GradeCorrecao from './GradeCorrecao';
import ProducaoTextoFinal from './ProducaoTextoFinal';
import CriteriosAvaliacao from './CriteriosAvaliacao';
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
                  é o <strong>dissertativo-argumentativo</strong>, uma unidade em <strong style={{ color: '#8c2f88' }}>prosa</strong> que exige o desenvolvimento de uma tese central sustentada por uma progressão lógica de argumentos.
                </p>
                <p className="mb-4 indent-6">
                  Produzir um texto não é apenas organizar palavras em uma folha, mas sim exercer sua cidadania e agir sobre a realidade social em que você vive. O gênero que guia
                  o Exame Nacional do Ensino Médio (Enem) e os principais processos seletivos do
                  país é o dissertativo-argumentativo, uma unidade em prosa que exige o desenvolvimento de uma tese central sustentada por uma progressão lógica de argumentos.
                </p>
                <p className="mb-4 indent-6">
                  Sob a <strong style={{ color: '#8c2f88' }}>perspectiva sociointeracionista da linguagem</strong>, a língua não é um
                  sistema estático de regras gramaticais, mas um meio de ação. Quando você escreve
                  uma redação, você está dialogando com um interlocutor global e racional, buscando
                  convencê-lo sobre a validade do seu ponto de vista. Diferente de gêneros puramente
                  informativos, como a notícia, em que o autor apenas relata fatos, na <strong>dissertação-argumentativa</strong> é necessário assumir um posicionamento assertivo diante de uma
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
                <div
                  style={{
                    width: '100%',
                    maxWidth: 940,
                    margin: '20px auto',
                    position: 'relative',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 14,
                    color: '#1a1a1a',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      maxWidth: 580,
                      marginLeft: 180,
                      border: '2px solid #3c1a5b',
                      padding: 30,
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: 16,
                      lineHeight: 1.6,
                      textAlign: 'justify',
                      position: 'relative',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 78,
                        left: 0,
                        width: 200,
                        borderBottom: '2px dotted #a0589e',
                        zIndex: 1,
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: 42,
                        left: 160,
                        width: 420,
                        borderBottom: '2px dotted #caad7e',
                        zIndex: 1,
                      }}
                    />


                    <div style={{ marginBottom: 15, position: 'relative', zIndex: 2 }}>
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

                    <div style={{ marginTop: 30, position: 'relative', zIndex: 2 }}>
                      <span style={{ backgroundColor: '#fdd99e' }}>Atenciosas Em primeira análise, é fundamental destacar
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
                        de garantir o direito à educação.</span><br />
                      <span style={{ backgroundColor: '#fdd99e' }}>Ademais, a mentalidade coletiva brasileira, </span>
                    </div>
                  </div>

                  <div
                    className="hidden lg:block"
                    style={{
                      position: 'absolute',
                      top: 35,
                      left: 0,
                      width: 160,
                      backgroundColor: '#ccadd3',
                      padding: '10px 15px',
                      fontSize: 13,
                      lineHeight: 1.4,
                      color: '#000',
                    }}
                  >
                    Magni ulpa quodi
                    sendit voluptur?
                    Udae volorro volorec
                    atusdae cepernat
                    enet es et qui
                    volorae doluptas eos
                    rerit lam hilicidem
                    nis expedic iderum
                    qui bearupt
                    atquosani del ilis
                    minus. <br />ipic tem reped
                    mo omnissi
                    mustior alissitatio.
                    ItaspieneDolorionet
                    laut vendis
                    eossequo optatium
                    quibearum essin
                    cuptatqui dolut
                    fugia velenit iostemo
                    in ea coreperiam,
                    samus rem elicia
                    verchitist quae
                    dolorios solupta
                    intiandipsa conserro
                    consequ aectore
                    henimin etur?
                    Quid evendistrum
                    quatioria dolut hit
                    is cus isitat.cum
                    antionsecaes mo ex
                    et audanim oluptat.
                  </div>

                  <div
                    className="hidden lg:block"
                    style={{
                      position: 'absolute',
                      bottom: 30,
                      left: 780,
                      width: 160,
                      backgroundColor: '#fdd99e',
                      padding: '10px 15px',
                      fontSize: 13,
                      lineHeight: 1.4,
                      color: '#000',
                    }}
                  >
                    Despedida e identificação do remetente.
                  </div>
                </div>


                <Pagination currentPage={16} />
                <RascunhoTexto instanceId="producaoTexto1" />
                <ProducaoTextoFinal />
                <GradeCorrecao />

                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="producao_final"
                  criterios={[
                    {
                      id: 'atendimento_exigencias',
                      nome: 'Atendimento às exigências',
                      niveis: {
                        0: 'O texto está fora da extensão pedida (menos de 15 ou mais de 20 linhas) e não atende às exigências formais da proposta de produção.',
                        1: 'O texto está fora da extensão pedida (menos de 15 ou mais de 20 linhas) ou atende apenas parcialmente às exigências formais da proposta.',
                        2: 'O texto possui entre 15 e 20 linhas e atende às exigências formais da proposta de produção.',
                      },
                    },
                    {
                      id: 'adequacao_genero',
                      nome: 'Adequação ao gênero',
                      niveis: {
                        0: 'O texto não apresenta a estrutura do dissertativo-argumentativo, assemelhando-se a outros gêneros.',
                        1: 'O texto apresenta parcialmente a estrutura do dissertativo-argumentativo (tese, argumentos e/ou conclusão), com desvios.',
                        2: 'O texto apresenta a estrutura característica do dissertativo-argumentativo: tese central, argumentação e conclusão.',
                      },
                    },
                    {
                      id: 'desenvolvimento_tema',
                      nome: 'Desenvolvimento do tema',
                      niveis: {
                        0: 'O texto não tematiza o tema proposto na proposta de produção.',
                        1: 'O texto tematiza o tema proposto, mas de forma superficial, sem sustentar adequadamente a tese.',
                        2: 'O texto tematiza adequadamente o tema proposto, desenvolvendo a tese com progressão argumentativa.',
                      },
                    },
                    {
                      id: 'adequacao_linguagem',
                      nome: 'Adequação da linguagem',
                      niveis: {
                        0: 'A linguagem não está adequada à situação de produção do texto dissertativo-argumentativo.',
                        1: 'A linguagem está parcialmente adequada à situação de produção, com alguns desvios de modalidade ou registro.',
                        2: 'A linguagem está plenamente adequada à situação de produção, com poucos ou nenhum desvio de modalidade ou registro.',
                      },
                    },
                    {
                      id: 'recursos_coesivos',
                      nome: 'Recursos coesivos',
                      niveis: {
                        0: 'Não há ou há uso precário de conectivos e recursos de coesão no texto.',
                        1: 'Há uso mediano de conectivos e recursos de coesão no texto.',
                        2: 'Há bom uso de conectivos e recursos de coesão, favorecendo a progressão lógica dos argumentos.',
                      },
                    },
                  ]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                />

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
