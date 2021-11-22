type MovieIndex = {
  id: number;
  title: string;
  genres: Record<string, number>;
  type: string;
  country: string;
  directors: Record<string, number>;
  open_date: Date;
  reg_date: Date;
  mod_date: Date;
  meta_data: Object;
};

export { MovieIndex };
