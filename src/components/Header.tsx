import { publicUrl } from '../lib/publicUrl';

function Header() {
  return (
    <header
      className="relative w-full min-w-0 bg-[#80298F] bg-no-repeat py-8 px-8 text-white"
      style={{
        backgroundImage: `url('${publicUrl('images/Capa-1.svg')}')`,
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
      }}
    >
      {/* Conteúdo do header */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex flex-col" style={{ marginLeft: '90px' }}>
            
            <h1
              className="font-inter font-bold"
              style={{
                fontWeight: 900,
                fontSize: '40px',
              }}
            >
              RUMO À REDAÇÃO NOTA 1000
            </h1>
            <p className="font-inter" style={{ fontSize: '16px', fontWeight: 500, marginLeft: '2px' }}>
              3ª série · Volume 1 
            </p>

          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;

