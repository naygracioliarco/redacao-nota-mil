import { UserAnswers } from '../types/questions';

export interface CriterioRubrica {
  id: string;
  nome: string;
  niveis: {
    0: string;
    1: string;
    2: string;
  };
}

interface CriteriosAvaliacaoProps {
  title?: string;
  instanceId: string;
  criterios: CriterioRubrica[];
  userAnswers?: UserAnswers;
  onAnswerChange?: (criterioId: string, answer: number) => void;
}

const PONTUACOES = [0, 1, 2] as const;
const BORDER_COLOR = '#c4c4c4';
const HEADER_BG = '#e8e8e8';

const cellStyle = {
  border: `1px solid ${BORDER_COLOR}`,
  verticalAlign: 'top' as const,
};

function CriteriosAvaliacao({
  title = '',
  instanceId,
  criterios,
  userAnswers = {},
  onAnswerChange,
}: CriteriosAvaliacaoProps) {
  const handleAnswerChange = (criterioId: string, answer: number) => {
    onAnswerChange?.(`${instanceId}_${criterioId}`, answer);
  };

  return (
    <div className="my-6 overflow-x-auto -mx-4 md:mx-0">
      <div className="min-w-full inline-block">
        {title && (
          <h3
            className="mb-4 font-bold text-sm md:text-base text-center"
            style={{ color: '#80298F', fontFamily: 'hwt-artz, sans-serif' }}
          >
            {title}
          </h3>
        )}

        <table
          className="w-full border-collapse"
          style={{
            fontFamily: 'Ubuntu, sans-serif',
            minWidth: '100%',
            border: `1px solid ${BORDER_COLOR}`,
          }}
        >
          <thead>
            <tr>
              <th
                className="p-2 md:p-3"
                style={{
                  ...cellStyle,
                  backgroundColor: HEADER_BG,
                  width: '22%',
                }}
              />
              {PONTUACOES.map((pontuacao) => (
                <th
                  key={pontuacao}
                  className="p-2 md:p-3 text-center font-bold text-sm md:text-base"
                  style={{
                    ...cellStyle,
                    backgroundColor: HEADER_BG,
                    color: '#000',
                  }}
                >
                  {pontuacao}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criterios.map((criterio) => {
              const uniqueId = `${instanceId}_${criterio.id}`;
              const answer = userAnswers[uniqueId] as number | undefined;

              return (
                <tr key={criterio.id}>
                  <td
                    className="p-2 md:p-3 font-bold text-xs md:text-sm"
                    style={{
                      ...cellStyle,
                      backgroundColor: HEADER_BG,
                      color: '#000',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                    }}
                  >
                    {criterio.nome}
                  </td>
                  {PONTUACOES.map((pontuacao) => (
                    <td
                      key={pontuacao}
                      className="p-2 md:p-3 text-xs md:text-sm"
                      style={{
                        ...cellStyle,
                        backgroundColor: 'white',
                        color: '#000',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                      }}
                    >
                      <label className="flex flex-col gap-2 cursor-pointer">
                        <span>{criterio.niveis[pontuacao]}</span>
                        <input
                          type="radio"
                          name={uniqueId}
                          checked={answer === pontuacao}
                          onChange={() => handleAnswerChange(criterio.id, pontuacao)}
                          className="w-3 h-3 md:w-4 md:h-4 self-center"
                          style={{ accentColor: '#80298F' }}
                        />
                      </label>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CriteriosAvaliacao;
