
export type BaseClass = 'Fighter' | 'Cleric' | 'MagicUser' | 'Thief' | 'Bard' | 'Monk';
export type AdvancedClass = 'Paladin' | 'Illusionist' | 'Druid' | 'Ranger' | 'Assassin';
export type ClassName = BaseClass | AdvancedClass;
export const Classes: ClassName[] = ['Fighter', 'Cleric', 'MagicUser', 'Thief', 'Bard', 'Monk', 'Paladin', 'Illusionist', 'Druid', 'Ranger', 'Assassin'];

function getCoreClass(className: ClassName): BaseClass {
    switch (className) {
        case 'Paladin':
        case 'Ranger':
            return 'Fighter';
        case 'Illusionist': 
            return 'MagicUser'
        case 'Druid': 
            return 'Cleric';
        case 'Assassin': 
            return 'Thief';
    }
    return className;
}