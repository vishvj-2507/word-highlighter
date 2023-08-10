import { useRef } from 'react';
import { Group, Image, Layer, Rect, Stage } from 'react-konva';
import useImage from 'use-image';
import { DocumentViewerProps } from '../../types/document-viewer';

export default function DocumentViewer(props: DocumentViewerProps) {
  const { imageUrl, onClick, coordinates } = props;
  const stageRef = useRef(null);
  const [image] = useImage(imageUrl);
  const imageWidth = image?.naturalWidth;
  const imageHeight = image?.naturalHeight;

  return (
    <div>
      <Stage onClick={onClick} width={imageWidth} height={imageHeight} ref={stageRef}>
        <Layer>
          <Group>
            <Image image={image} />
            {/* Highlighter */}
            {coordinates ? (
              <Rect
                x={coordinates.x}
                y={coordinates.y}
                width={coordinates.wordWidth}
                height={coordinates.wordHeight}
                fill='yellow'
                opacity={0.5}
              />
            ) : null}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
