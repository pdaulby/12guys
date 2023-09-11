type Allignment = 'LG' | 'LN' | 'LE' 
                | 'NG' | 'NN' | 'NE'
                | 'CG' | 'CN' | 'CE';
const Allignments: Allignment[] = ['LG', 'LN', 'LE', 'NG', 'NN', 'NE', 'CG', 'CN', 'CE']

const classAllignment = {
    'Cleric': Allignments,
    'Druid': ['NN'],
    'Fighter': Allignments,
    'Paladin': ['LG'],
    'Ranger': ['LG','NG','CG'],
    'MagicUser': Allignments,
    'Illusionist': Allignments,
    'Thief': ['LN','LE','NG','NN','NE','CN','CE'],
    'Assassin': ['LE','NE','CE'],
    'Bard': ['LN','NG','NN','NE','CN'],
    'Monk': ['LG','LN','LE']
}

const AllignmentText = {
    'LG': 'Lawful Good', 'LN': 'Lawful Neutral', 'LE': 'Lawful Evil',
    'NG': 'Neutral Good', 'NN': 'True Neutral', 'NE': 'Neutral Evil',
    'CG': 'Chaotic Good', 'CN': 'Chaotic Neutral', 'CE': 'Chaotic Evil'
}

export default Allignment;