export interface Pokemon {
  poke_id: string;
  name: string;
  image: string;
  type: string;
  stats: {
    attack: number;
    hp: number;
    speed: number;
    defense: number;
  };
}
