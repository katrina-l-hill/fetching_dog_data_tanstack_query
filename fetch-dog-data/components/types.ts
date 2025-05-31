export interface Breed {
    id: string;
    type: string;
    attributes: {
      name: string;
      description?: string;
      life?: {
        min: number;
        max: number;
      };
    };
  }
  
  export interface Fact {
    id: string;
    type: string;
    attributes: {
      body: string;
    };
  }
  
  export interface Group {
    id: string;
    type: string;
    attributes: {
      name: string;
    };
    relationships: {
        breeds: {
            data: {
                id: string;
                type: string;
            }
        }
    }
  }