import { KonvaEventObject } from "konva/lib/Node";

interface HighlightCoordinates {
  x: number;
  y: number;
  wordWidth: number;
  wordHeight: number;
}

interface CanvasMouseEvent extends MouseEvent {
  layerX: number;
  layerY: number;
}

export interface DocumentViewerProps {
  imageUrl: string;
  width: number;
  height: number;
  onClick: (event: KonvaEventObject<CanvasMouseEvent>) => void;
  coordinates: HighlightCoordinates | null;
}
