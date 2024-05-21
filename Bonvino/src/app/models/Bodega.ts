// models/bodega.model.ts

export interface Bodega {
    id_bodega: number;
    nombre: string;
    region_vitivinicola: RegionVitivinicola;
    descripcion: string;
    historia: string;
    periodo_actualizable: string;
    es_actualizable: boolean;
  }
  
  export interface RegionVitivinicola {
    id_region: number;
    nombre: string;
  }
  