"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TeamStyles from './css/team.module.css';
import MemberObj from './member.json';
import MembersRow from './memberRow';

const Team = () => {
  const splitMembers = <T, >(array: T[], chunkSize: number): T[][] => (
    Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
    array.slice(index * chunkSize, (index + 1) * chunkSize)
    )
  );
  const smScreenArrays = splitMembers(MemberObj, 2);
  const lgScreenArrays = splitMembers(MemberObj, 4);

  const [members, setMembers] = useState(smScreenArrays);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMembers(lgScreenArrays)
      } else {
        setMembers(smScreenArrays)
      }
    };
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <section id="team" className={TeamStyles.team}>
      <div className={TeamStyles.header}>
        <h2>Meet our Team</h2>
        <p>Here are the dedicated individuals behind the Engineering Career Expo (ECX), each bringing a unique set of skills and expertise to empower students on their journey from academia to the professional world.
        <span className={TeamStyles.lineBreak} />
        Get to know the minds shaping ECX:
       </p>
      </div>
      <div className={TeamStyles.members_ctn}>
        {
          members.map((memberRow, index) => (
            <MembersRow key={index} members={memberRow} index={index} />
          ))
        }
      </div>

      <Link
        className={`button ${TeamStyles.ctaBtn}`}
        href="http://bit.ly/volunteer4ecx"
        target="_blank" rel="noopener noreferrer"
      >
        Volunteer for ECX
      </Link>
    </section>
  )
}
export default Team;
