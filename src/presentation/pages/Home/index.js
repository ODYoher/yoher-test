import React, { useEffect } from 'react';
import { Card, Recomendation } from '../../../infrastructure/common'
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

export default function Home () {
  const dispatch = useDispatch();
  const { recomendations } = useSelector((state) => state.recomendation);

  useEffect(() => {
    dispatch.recomendation.getAllRecomendations();
  }, [dispatch])
  return (
    <Card>
      <div className='flex-row-wrap'>
        {recomendations.map((recomendation, i) => {
          return (
            <div className='m-16'>
              <Recomendation
                key={i}
                image={recomendation.image}
                title={recomendation.title}
                instructions={recomendation.instructions}
                why={recomendation.why}
                tags={recomendation.tags}
                counterindication={recomendation.contraindications}
                studies={recomendation.studies}
              />
            </div>

          )
        })}
      </div>

    </Card>
  )
}