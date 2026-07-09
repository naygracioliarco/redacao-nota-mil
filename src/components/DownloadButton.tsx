interface DownloadButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

function DownloadButton({ onClick, disabled = false }: DownloadButtonProps) {
  return (
    <div className="flex">
      <button
        onClick={onClick}
        style={{
          position: 'relative',
          padding: '10px 30px 10px 45px',
          backgroundColor: '#80298F',
          boxShadow: '0px 4px 0px #5e1f6a',
          borderRadius: '0 30px 30px 0',
          color: 'white',
          fontFamily: 'Ubuntu',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '1.4em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          margin: '1em 0.4em 1.4em 1.4em',
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = '#5e1f6a';
            e.currentTarget.style.boxShadow = '0px 2px 0px #5e1f6a';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = '#80298F';
            e.currentTarget.style.boxShadow = '0px 4px 0px #5e1f6a';
          }
        }}
        disabled={disabled}
      >
        <div
          style={{
            position: 'absolute',
            left: '-17px',
            top: '55%',
            transform: 'translateY(-50%)',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            backgroundColor: '#80298F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            background: 'transparent url("images/download.png") no-repeat center',
            backgroundSize: '100%',
          }}
        >
        </div>
        Download
      </button>
    </div>
  );
}

export default DownloadButton;

