import { useWindowSize } from '@react-hook/window-size';
import DocumentViewer from '../../components/document-viewer';
import resJSON from '../../assets/res.json';
import { useCallback, useState } from 'react';
import { getClickedWord, getCoordinates } from '../../helpers/viewer-helpers';

export default function Viewer() {
  const [width, height] = useWindowSize();
  const [selectedWord, setSelectedWord] = useState<any>();
  const halfWidth = Math.floor(width / 2);

  const handleClick = useCallback((event: any) => {
    getClickedWord(event, resJSON, (word: any) => setSelectedWord(word));
  }, []);

  return (
    <div className='flex flex-col w-screen overflow-hidden'>
      <main className='flex flex-1'>
        <div className={'flex-1'}>
          <DocumentViewer
            coordinates={getCoordinates(selectedWord?.coordinates)}
            imageUrl='/image/sample.png'
            width={halfWidth}
            height={height}
            onClick={handleClick}
          />
        </div>
        <div
          id='divider'
          className='bg-gray-300 cursor-col-resize flex items-center justify-center px-2 rounded-lg'
        >
          <div className='w-1 h-10 bg-gray-500 rounded-lg' />
        </div>
        <div className={'flex-1'}>
          <DocumentViewer
            coordinates={getCoordinates(selectedWord?.coordinates)}
            imageUrl='/image/sample.png'
            width={halfWidth}
            height={height}
            onClick={handleClick}
          />
        </div>
      </main>
    </div>
  );
}
