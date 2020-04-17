import * as React from 'react';
export interface MapMarker {
  readonly dataset?: DOMStringMap;
  id?: number;
  latitude: number;
  longitude: number;
  title?: string;
  iconPath: string;
  rotate?: number;
  alpha?: number;
  width?: number;
  height?: number;
  callout?: any;
  anchorX?: number;
  anchorY?: number;
  customCallout?: any;
  iconAppendStr?: string;
  iconAppendStrColor?: string;
  fixedPoint?: any;
  markerLevel?: number;
  label?: any;
  style?: React.CSSProperties;
}
export interface MapPolyline {
  readonly dataset?: DOMStringMap;
  points: Array<{
    latitude: number;
    longitude: number;
  }>;
  color?: string;
  dottedLine?: boolean;
  iconWidth?: number;
  zIndex?: number;
  iconPath?: string;
  colorList?: any[];
  width?: number;
}
export interface MapCircle {
  readonly dataset?: DOMStringMap;
  latitude: number;
  longitude: number;
  color?: string;
  fillColor?: string;
  radius: number;
  strokeWidth?: number;
}
export interface MapPosition {
  readonly dataset?: DOMStringMap;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}
export interface MapControl {
  readonly dataset?: DOMStringMap;
  id?: number;
  position: MapPosition;
  iconPath: string;
  clickable?: boolean;
}
export interface MapPolygon {
  readonly dataset?: DOMStringMap;
  points: Array<{
    latitude: number;
    longitude: number;
  }>;
  color?: string;
  fillColor?: string;
  width?: number;
}
export interface MapCoordinate {
  readonly dataset?: DOMStringMap;
  latitude?: number;
  longitude?: number;
}
export interface MapSetting {
  readonly dataset?: DOMStringMap;
  gestureEnable?: number;
  showScale?: number;
  showCompass?: number;
  tiltGesturesEnabled?: number;
  trafficEnabled?: number;
  showMapText?: number;
  logoPosition?: {
    centerX?: number;
    centerY?: number;
  };
}
export interface MapProps extends MapCoordinate {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  className?: string;
  scale?: number;
  markers?: MapMarker[];
  polyline?: MapPolyline[];
  circles?: MapCircle[];
  controls?: MapControl[];
  polygon?: MapPolygon[];
  showLocation?: boolean;
  includePoints?: Array<Required<MapCoordinate>>;
  includePadding?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  groundOverlays?: Array<{
    'include-points': Array<Required<MapCoordinate>>;
    image: string;
    alpha?: number;
    zIndex?: number;
  }>;
  tileOverlay?: Array<{
    url: string;
    type: number;
    tileWidth: number;
    tileHeight: number;
    zIndex?: number;
  }>;
  setting?: MapSetting;
  onMarkerTap?: (e: any) => void;
  onCalloutTap?: (e: any) => void;
  onControlTap?: (e: any) => void;
  onRegionChange?: (e: any) => void;
  onTap?: (e: any) => void;
}
declare const Map: React.ForwardRefExoticComponent<MapProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default Map;
