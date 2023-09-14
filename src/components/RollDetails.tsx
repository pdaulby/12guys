import React from 'react';
import Store from '../store/Store';
import { getAge, getAgeCategory } from '../scripts/Age';
import { ShowDetails } from './ShowDetails';
import Allignment, { AllignmentGrid, AllignmentText, classAllignment } from '../models/Allignment';

export const RollDetails: React.FC = () => { 
  if (!Store.height) Store.calculateMiscValues();
  let age = getAge(Store.race!, Store.className!);
  return (<>
    <ShowDetails/>
    <div>Age: {age} - {getAgeCategory(age, Store.race!)} <button onClick={()=>Store.increaseAge(age)}>apply age ability score modifications</button></div>
  </>)
}

export const ChooseAllignment: React.FC = () => {
  let allignments: Allignment[] = classAllignment[Store.className!];
  return (<>
    <ShowDetails />
    <div className='Allignments'>
      {AllignmentGrid.map(row=>
      <div className='AllignmentRow'>
        {row.map(allignment=><AllignmentButton allignment={allignment} allowed={allignments.includes(allignment)} />)}
      </div>)}
    </div>
  </>)
}
export const AllignmentButton: React.FC<{allignment: Allignment, allowed: boolean}> = ({allignment, allowed}) => {
  return (
    <div className={allowed?'ClassSelect':'DisabledSelect'} onClick={()=>allowed ? Store.chooseAllignment(allignment) : {}} >
        {AllignmentText[allignment]}
    </div>
    )
}