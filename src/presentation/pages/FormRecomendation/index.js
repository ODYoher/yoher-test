import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import '@material/react-text-field/dist/text-field.css';
import './style.css'
import { Card } from '../../../infrastructure/common'

const FormRecomendation = ({ addRecomendations }) => {
  const dispatch = useDispatch();
  const defaultState = {
    title: '',
    image: '',
    instructions: '',
    why: '',
    tags: '',
    contraindications: '',
    studies: []
  }
  const defaultStudiesState = {
    label: '',
    link: ''
  }
  const [form, setForm] = useState(defaultState);
  const [modalForm, setModalForm] = useState(defaultStudiesState);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const handleChangeModalForm = (key, value) => {
    setModalForm({ ...modalForm, [key]: value });
  }

  const addStudy = () => {
    const studies = form.studies;
    studies.push(modalForm);
    setForm({ ...form, studies });
    setIsOpen(false)
  }

  const handleSubmit = async () => {
    console.log(dispatch)
    await dispatch.recomendation.saveRecomendation(form);
  }

  return (
    <Card>
      <div className='form'>
        <h1>Agregar Recomendación</h1>
        <div className='form-control'>
          <TextField className='full-width' label='Title'>
            <Input
              value={form.title}
              onChange={e => handleChange('title', e.currentTarget.value)}
            />
          </TextField>
        </div>

        <div className='form-control'>
          <TextField className='full-width' label='Image'>
            <Input
              value={form.image}
              onChange={e => handleChange('image', e.currentTarget.value)}
            />
          </TextField>
        </div>

        <div className='form-control'>
          <TextField className='full-width' label='Instructions'>
            <Input
              value={form.instructions}
              onChange={e => handleChange('instructions', e.currentTarget.value)}
            />
          </TextField>
        </div>

        <div className='form-control'>
          <TextField className='full-width' label='Why'>
            <Input
              value={form.why}
              onChange={e => handleChange('why', e.currentTarget.value)}
            />
          </TextField>
        </div>

        <div className='form-control'>
          <TextField className='full-width' label='Tags'>
            <Input
              value={form.tags}
              onChange={e => handleChange('tags', e.currentTarget.value)}
            />
          </TextField>
        </div>

        <div className='form-control'>
          <TextField className='full-width' label='Contraindications'>
            <Input
              value={form.contraindications}
              onChange={e => handleChange('contraindications', e.currentTarget.value)}
            />
          </TextField>
        </div>

        <div className='form-control-studios'>
          <div className='full-width'>
            <label>Estudios: </label>
            {form.studies.map((study, i) => {
              return (
                <div key={i}>
                  <span>{study.link}</span>
                </div>
              )
            })}
            <button className='button button-success' onClick={() => setIsOpen(!modalIsOpen)}> Agregar estudio </button>
          </div>

        </div>

        <div className='form-control'>
          <button className='button button-success' onClick={() => handleSubmit()}> Guardar </button>
          <button className='button button-cancel'> <Link to="/" className='button button-cancel'> Cancelar </Link> </button>
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Agregar estudio"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '300px',
            width: '400px',
          },
        }}
      >
        <div className='form'>
          <div className='close-modal-container'>
            <div className='title'>
              <h2>Agregar estudio</h2>
            </div>
            <span className='close-modal' onClick={() => setIsOpen(false)}>&times;</span>
          </div>
          <div className='form-control'>
            <TextField className='full-width' label='Label'>
              <Input
                value={modalForm.label}
                onChange={e => handleChangeModalForm('label', e.currentTarget.value)}
              />
            </TextField>
          </div>

          <div className='form-control'>
            <TextField className='full-width' label='URL'>
              <Input
                value={modalForm.link}
                onChange={e => handleChangeModalForm('link', e.currentTarget.value)}
              />
            </TextField>
          </div>

          <div className='form-control'>
            <button className='button button-success' onClick={() => addStudy()}> Guardar </button>
            <button className='button button-cancel' onClick={() => setIsOpen(false)}> Cancelar </button>
          </div>
        </div>

      </Modal>
    </Card>
  )
}

export default FormRecomendation