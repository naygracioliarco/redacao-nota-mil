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

function Book() {
  const { userAnswers, handleAnswerChange } = useUserAnswers();
  const { currentPage, scrollToTop } = usePagination();

  // Restaura a posição de scroll salva
  useScrollPosition();

  return (
    <div className="min-h-screen bg-gray-200 w-full">
      <div className="mx-auto bg-white shadow-2xl overflow-hidden w-full md:max-w-[63%]" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Header />
        <Pagination currentPage={1} attachToHeader />

        <div className="p-8 md:p-12">
          {/* Conteúdo do Capítulo 1 */}
          <Chapter
            content={
              <>
                <h3 style={{ marginBottom: '2.0rem', marginTop: '2.0rem' }}>PROPOSTA DE
                  PRODUÇÃO TEXTUAL -  <strong>E-MAIL</strong></h3>
                <p className="mb-4 indent-6">
                  Imagine-se como um estudante do Ensino Médio, membro de uma equipe responsável pelo bem-estar da comunidade estudantil. Neste semestre,
                  vocês estão desenvolvendo projetos relacionados ao meio ambiente, visando melhorar diferentes aspectos ambientais na localidade. Para se organizarem, foram elencados os e-mails que precisam enviar para diferentes grupos.
                  Portanto, você deve escolher uma das situações expostas a seguir e redigir
                  um <em>e-mail</em> considerando o destinatário e a finalidade da comunicação:
                </p>

                <h4>1. Opção A:</h4>
                <p className="mb-4 indent-6">
                  Você deve escrever um e-mail para o Secretário Municipal de Meio Ambiente
                  explicando ao menos uma ação ambiental que está sendo realizada pela escola, solicitando à prefeitura que passe a ser responsável por ela e assim garanta a cidadania da população local. Justifique a importância da ação.
                </p>
                <h4>2. Opção B:</h4>
                <p className="mb-4 indent-6">
                  Você deve escrever um e-mail para o jornal local da sua cidade solicitando
                  a esse veículo que faça uma matéria sobre a iniciativa da escola, buscando
                  conscientizar a população sobre a importância de ações ambientais coletivas.
                </p>
                <h4>3. Opção C:</h4>
                <p className="mb-4 indent-6">
                  Você deve escrever um <em>e-mail</em> direcionado aos colegas de sua sala, apresentando a iniciativa da equipe e convidando os alunos para se juntarem ao grupo.
                </p>
                <p className="mb-4 indent-6">
                  O <em>e-mail</em> deve ser escrito individualmente, mas assinado como “Equipe de
                  Bem-Estar Comunitário da Rumo à Redação Nota 1000” e possuir entre 15 e
                  20 linhas.

                </p>


                <Pagination currentPage={2} />
                <RascunhoTexto instanceId="producaoTexto1" />
                <Pagination currentPage={3} />
                <ProducaoTextoFinal />
                <Pagination currentPage={4} />
                <GradeCorrecao />

                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="producao_final"
                  criterios={[
                    {
                      id: 'atendimento_exigencias',
                      nome: 'Atendimento às exigências',
                      niveis: {
                        0: 'O texto possui menos de 15 ou mais de 20 linhas e não é assinado como “Equipe de Bem-Estar Comunitário da Escola Rumo à Redação Nota 1000”.',
                        1: 'O texto possui menos de 15 ou mais de 20 linhas ou não é assinado como “Equipe de Bem-Estar Comunitário da Escola Rumo à Redação Nota 1000”.',
                        2: 'O texto possui entre 15 e 20 linhas e é assinado como “Equipe de Bem-Estar Comunitário da Escola Rumo à Redação Nota 1000”.',
                      },
                    },
                    {
                      id: 'adequacao_genero',
                      nome: 'Adequação ao gênero',
                      niveis: {
                        0: 'O texto não apresenta a estrutura de um e-mail, assemelhando-se a outros tipos textuais.',
                        1: 'O texto apresenta alguns elementos estruturais do e-mail, mas possui desvios.',
                        2: 'O texto apresenta os elementos característicos de um e-mail, como cabeçalho, corpo do texto e assinatura.',
                      },
                    },
                    {
                      id: 'desenvolvimento_tema',
                      nome: 'Desenvolvimento do tema',
                      niveis: {
                        0: 'O texto não tematiza o tema proposto na opção escolhida.',
                        1: 'O texto tematiza o tema proposto na opção escolhida, mas de forma superficial, sem cumprir com todas as recomendações.',
                        2: 'O texto tematiza adequadamente o tema proposto na opção escolhida, cumprindo a finalidade da produção.',
                      },
                    },
                    {
                      id: 'adequacao_linguagem',
                      nome: 'Adequação da linguagem',
                      niveis: {
                        0: 'A linguagem não está adequada à situação de produção escolhida.',
                        1: 'A linguagem está parcialmente adequada à situação de produção escolhida, com alguns desvios de modalidade.',
                        2: 'A linguagem está plenamente adequada à situação de produção escolhida, com poucos ou nenhum desvio de modalidade.',
                      },
                    },
                    {
                      id: 'recursos_coesivos',
                      nome: 'Recursos coesivos',
                      niveis: {
                        0: 'Não há ou há uso precário de conectivos no texto.',
                        1: 'Há uso mediano de conectivos no texto.',
                        2: 'Há bom uso de conectivos no texto.',
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
