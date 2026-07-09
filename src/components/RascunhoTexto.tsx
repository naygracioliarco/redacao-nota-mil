import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import DownloadButton from './DownloadButton';
import FolhaPautada from './FolhaPautada';

interface RascunhoTextoProps {
  instanceId?: string;
  title?: string;
  pdfTitle?: string;
  pdfFileName?: string;
}

function RascunhoTexto({
  instanceId = 'producaoTexto',
  title = 'RASCUNHO',
  pdfTitle = 'RASCUNHO',
  pdfFileName = 'rascunho.pdf',
}: RascunhoTextoProps) {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const textoSalvo = localStorage.getItem(instanceId);
    if (textoSalvo) {
      setTexto(textoSalvo);
    }
  }, [instanceId]);

  useEffect(() => {
    localStorage.setItem(instanceId, texto);
  }, [texto, instanceId]);

  const handleDownload = () => {
    if (!texto.trim()) {
      alert('Por favor, digite algum texto antes de baixar.');
      return;
    }

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;
    const lineHeight = 7;
    let yPosition = margin + 20;

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(pdfTitle, margin, yPosition);
    yPosition += 15;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    const lines = doc.splitTextToSize(texto, maxWidth);

    lines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }

      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    doc.save(pdfFileName);
  };

  return (
    <div className="my-6">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="images/producaoTexto.png"
          alt="Trilha do texto"
          className="object-contain"
        />
        <h2
          style={{
            color: '#0E3B5D',
            fontFamily: 'hwt-artz',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          {title}
        </h2>
      </div>

      <FolhaPautada
        value={texto}
        onChange={setTexto}
        placeholder="Digite seu rascunho aqui..."
      />

      <DownloadButton onClick={handleDownload} disabled={!texto.trim()} />
    </div>
  );
}

export default RascunhoTexto;
