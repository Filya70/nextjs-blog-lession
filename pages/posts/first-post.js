import Head from 'next/head'
import Link from "next/link";
import Layout from '../../components/layout'



import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { ru } from 'date-fns/locale'

export default function FirstPost() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  console.log(state);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        direction="horizontal"
        dateDisplayFormat="d MMM yyyy"
        ranges={state}
        locale={ru}
        editableDateInputs={false}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}