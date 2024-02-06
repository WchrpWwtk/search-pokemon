type Pokemon = {
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: Array<string>;
  resistant: Array<string>;
  attacks: {
    fast: Array<{
      name: string;
      type: string;
      damage: number;
    }>;
    special: Array<{
      name: string;
      type: string;
      damage: number;
    }>;
  };
  weaknesses: Array<string>;
  fleeRate: number;
  maxCP: number;
  evolutions: [
    {
      number: string;
      name: string;
      weight: {
        minimum: string;
        maximum: string;
      };
      height: {
        minimum: string;
        maximum: string;
      };
      classification: string;
      types: Array<string>;
      resistant: Array<string>;
      attacks: {
        fast: Array<{
          name: string;
          type: string;
          damage: number;
        }>;
        special: Array<{
          name: string;
          type: string;
          damage: number;
        }>;
      };
      weaknesses: Array<string>;
      fleeRate: number;
      maxCP: "number";
      evolutions: [
        {
          number: string;
          name: string;
          weight: {
            minimum: string;
            maximum: string;
          };
          height: {
            minimum: string;
            maximum: string;
          };
          classification: string;
          types: Array<string>;
          resistant: Array<string>;
          attacks: {
            fast: Array<{
              name: string;
              type: string;
              damage: number;
            }>;
            special: Array<null>;
          };
        }
      ];
    }
  ];
};

let empty = {
  number: -1,
  name: "",
  weight: {
    minimum: "",
    maximum: "",
  },
  height: {
    minimum: "",
    maximum: "",
  },
  classification: "",
  types: [],
  resistant: [],
  attacks: {
    fast: [],
    special: [],
  },
  weaknesses: [],
  fleeRate: 0,
  maxCP: 0,
  evolutions: [],
};
