export interface Player {
  id: string;
  number: string;
  name: string;
  position: string;
  height: string;
  trait: string;
  description: string;
  imageUrl: string;
}

export const players: Player[] = [
  {
    id: '1',
    number: '1',
    name: 'Edyta',
    position: 'Rozgrywająca',
    height: '168 cm',
    trait: 'Kreatywność',
    description: 'Mózg drużyny. Dokładnie rozprowadza piłki i zaskakuje blok przeciwnika.',
    imageUrl: 'https://placehold.co/400x400/09090b/dc2626?text=1',
  },
  {
    id: '2',
    number: '2',
    name: 'Jola',
    position: 'Atakująca',
    height: '175 cm',
    trait: 'Siła ataku',
    description: 'Główna armata zespołu. Niezatrzymana na prawym skrzydle.',
    imageUrl: 'https://placehold.co/400x400/09090b/dc2626?text=2',
  },
  {
    id: '3',
    number: '3',
    name: 'Wiolka',
    position: 'Środkowa',
    height: '180 cm',
    trait: 'Szczelny blok',
    description: 'Ściana nie do przejścia. Królowa bloku i szybkich ataków ze środka.',
    imageUrl: 'https://placehold.co/400x400/09090b/dc2626?text=3',
  },
  {
    id: '4',
    number: '4',
    name: 'Amelia',
    position: 'Przyjmująca',
    height: '172 cm',
    trait: 'Mocny serwis',
    description: 'Pewny punkt w przyjęciu i bardzo silna zagrywka.',
    imageUrl: 'https://placehold.co/400x400/09090b/dc2626?text=4',
  },
  {
    id: '5',
    number: '5',
    name: 'Ewa',
    position: 'Libero',
    height: '165 cm',
    trait: 'Zwinność',
    description: 'Koci refleks w obronie. Podbija piłki, których nie da się podbić.',
    imageUrl: 'https://placehold.co/400x400/09090b/dc2626?text=5',
  },
  {
    id: '6',
    number: '6',
    name: 'Hanna',
    position: 'Przyjmująca',
    height: '170 cm',
    trait: 'Żelazny odbiór',
    description: 'Świetna w defensywie i techniczna w ataku.',
    imageUrl: 'https://placehold.co/400x400/09090b/dc2626?text=6',
  },
];
