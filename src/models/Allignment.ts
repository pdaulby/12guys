export type Allignment = 'LG' | 'LN' | 'LE' 
                | 'NG' | 'NN' | 'NE'
                | 'CG' | 'CN' | 'CE';
const Allignments: Allignment[] = ['LG', 'LN', 'LE', 'NG', 'NN', 'NE', 'CG', 'CN', 'CE']

export const classAllignment = {
    'Cleric': Allignments,
    'Druid': ['NN'] as Allignment[], //ew gross
    'Fighter': Allignments,
    'Paladin': ['LG'] as Allignment[],
    'Ranger': ['LG','NG','CG'] as Allignment[],
    'MagicUser': Allignments,
    'Illusionist': Allignments,
    'Thief': ['LN','LE','NG','NN','NE','CN','CE'] as Allignment[],
    'Assassin': ['LE','NE','CE'] as Allignment[],
    'Bard': ['LN','NG','NN','NE','CN'] as Allignment[],
    'Monk': ['LG','LN','LE'] as Allignment[]
}

export const AllignmentText = {
    'LG': 'Lawful Good', 'LN': 'Lawful Neutral', 'LE': 'Lawful Evil',
    'NG': 'Neutral Good', 'NN': 'True Neutral', 'NE': 'Neutral Evil',
    'CG': 'Chaotic Good', 'CN': 'Chaotic Neutral', 'CE': 'Chaotic Evil'
}

export default Allignment;