
interface PaginationProps {
  currentPage: number;
  attachToHeader?: boolean;
}

function Pagination({ currentPage, attachToHeader = false }: PaginationProps) {
  return (
    <div
      data-page={currentPage}
      className="flex items-center justify-center -mx-8 md:-mx-12 px-4 md:px-[360px] py-1"
      style={{
        display: 'flex',
        width: '100vw',
        maxWidth: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#fcefff',
        marginBottom: '40px',
        marginTop: attachToHeader ? 0 : '40px',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        fontFamily: 'Ubuntu',
      }}
    >
      <span>Página - {currentPage}</span>
      <img
                  src="images/seta.svg"
                  alt="Union"
                  className="w-3 h-3 object-contain"
                />
    </div>
  );
}

export default Pagination;

