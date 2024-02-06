"use client";
import { useEffect, useState } from 'react';
import MemberRowStyles from './css/memberRow.module.css';
import MemberCard from './memberCard';

interface props {
  members: any;
  index: number
}

const MembersRow = ({ members, index }: props) => {
  const [rowMembersData, setRowMembersData] = useState(members)

  useEffect(() => {
    const updatedRowMembersData = members.map((member:object, memberIndex:number) => ({
      ...member,
      memberIndex: memberIndex,
      expand: (index % 2 === 0) && (memberIndex === 0)
        ? true
        : (index % 2 === 1) && (memberIndex === (members.length - 1))
          ? true : false
    }))
    setRowMembersData(updatedRowMembersData)
  }, [members])
  const updateRow = (index: string) => {
    const updatedData = rowMembersData.map((member:any) =>
      member.memberIndex === index ? { ...member, expand: true } : { ...member, expand: false }
    );
    setRowMembersData(updatedData)
  }
  
  return (
    <div className={MemberRowStyles.member_row}>
      {
        rowMembersData.map((member:any, index:number) => (
          <MemberCard handleHover={updateRow} key={index} index={index} defaultExpand={false} {...member} />
        ))
      }
    </div>
  )
}
export default MembersRow;
