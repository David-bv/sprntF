import axios from 'axios';
import React, { Component } from 'react'
import { Form, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { questionJs } from '../../data/Question';
import { url } from '../../helpers/url';
import { AlertQuiz, AlertWrong, BarCont, ButtonAlertCo, ButtonAlertWr, ButtonStyle, ContainerForm, FormStyle, HeaderForm, LifeCount, QuestionCont, RadioStyle, Title } from '../../styles/StyledComponents';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


let dataLocalst = JSON.parse(localStorage.getItem('user'))
const MySwal = withReactContent(Swal)


export default class QuestionJs extends Component {
    constructor() {
        super();
        this.state = {
            numberQuestion: 0,
            question: {
                question: '',
                a: '',
                b: '',
                c: '',
                correct: '',
                image: ''
            },
            score: 0,
            scoreWrong: 0,
            answerSelect: '',
            hour: 0,
            showTitle: false,
            showWrongAlert: false,
            showCorrectAlert: false,
            showSendTest: false,
            isToggleOn: true,
            data: [],
            counterTime: 0
        }
        this.counter = null;
        this.initTimer = this.initTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }  

    initTimer() {
        this.counter = setInterval(() => {
             this.setState({ counterTime: this.state.counterTime + 0.00027 });
        }, 1000);
    }

    pauseTimer() {
        clearInterval(this.counter);
        this.counter = null;
    }

    clearTimer() {
        this.setState({ counterTime: 0 });
        clearInterval(this.counter);
        this.counter = null;
    }

    componentDidMount() {
        const currentQuizData = questionJs[this.state.numberQuestion]
        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                correct: currentQuizData.correct,
                image: currentQuizData.image
            }
        })
        this.peticionGet()
    }

    peticionGet = () => {
        axios.get(url)
            .then(response => {
                this.setState({ data: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateStats = () => {
        let stats = {
            id:dataLocalst.id,
            email:dataLocalst.email, 
            name: dataLocalst.name,
            img: dataLocalst.img, 
            password: dataLocalst.password,
            qok: this.state.score + dataLocalst.qok,
            qwrong: this.state.scoreWrong + dataLocalst.qwrong,
            qtotal: this.state.score + this.state.scoreWrong + dataLocalst.qtotal,
            hour:  this.state.counterTime + dataLocalst.hour,
        }
        axios.put(url+dataLocalst.id, stats)
            .then(response => this.setState({ data: response.data }))
            .catch(error => {
                console.error('There was an error!', error);
            });
        MySwal.fire({
            html: <i>Datos Actualizados</i>,
            icon: 'success',
            background: '#16161A' ,
            color: '#FFFFFE',
            width:'300px',
            padding:'25px',
            confirmButtonColor:'#7F5AF0',
            heightAuto: 'false',
        })
        localStorage.setItem('user', JSON.stringify(stats))        
    }

    onChange = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
        this.initTimer()
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {

            this.setState({
                score: this.state.score + 1
            })
            this.alertVali()

        } else if (this.state.answerSelect.contains !== this.state.question.correct) {

            this.setState({
                scoreWrong: this.state.scoreWrong + 1
            })
            this.alertVali()
        }
        if (this.state.numberQuestion < questionJs.length) {
            this.componentDidMount() 
        } else {
            this.pauseTimer()
            MySwal.fire({
                html: <i>Finalizaste el test, por favor enviar los resultados</i>,
                icon: 'info',
                background: '#16161A' ,
                color: '#FFFFFE',
                width:'300px',
                padding:'25px',
                confirmButtonColor:'#7F5AF0',
                heightAuto: 'false',
            })
            this.setState({ showSendTest: true })
        }
    }

    alertVali() {
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({ showCorrectAlert: true })
        } else if (this.state.answerSelect.contains !== this.state.question.correct) {
            this.setState({ showWrongAlert: true })
        }
    }

    lifeCount = (num) => {
        let n = 0;
        n = 4 - num
        if (n <= 0) {
            n = 0
        }
        return n
    }

    render() {
          return (
            <ContainerForm>
                <FormStyle onSubmit={this.handleSubmit}>
                    <Form.Group controlId='control_radio' >
                        <HeaderForm>
                            <Link to="/home"><img src='https://res.cloudinary.com/david-b/image/upload/v1645240034/sprint2/reto-final/x_cyvfkn.svg' alt='' /></Link>
                            <BarCont variant="success" now={this.state.numberQuestion} max={questionJs.length} />
                            <img src='https://res.cloudinary.com/david-b/image/upload/v1645239590/sprint2/reto-final/hearth_eatxxw.svg' alt='' />
                            <LifeCount>{this.lifeCount(this.state.scoreWrong)}</LifeCount>
                        </HeaderForm>
                        <QuestionCont>
                            <img src={this.state.question.image} alt='' className='imgQuiz' />
                            <Title>{this.state.question.question}</Title>
                        </QuestionCont>

                        <RadioStyle
                            type="radio"
                            label={this.state.question.a}
                            value={this.state.question.a}
                            name={"Respuestas"}
                            id={"Respuesta1"}
                            onChange={this.onChange}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.b}
                            value={this.state.question.b}
                            name={"Respuestas"}
                            id={"Respuesta2"}
                            onChange={this.onChange}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.c}
                            value={this.state.question.c}
                            name={"Respuestas"}
                            id={"Respuesta3"}
                            onChange={this.onChange}
                        />
                    </Form.Group>

                    <ButtonStyle variant="primary" type="submit" onClick={() => this.setState({
                        numberQuestion: this.state.numberQuestion + 1
                    })}>
                        Comprobar
                    </ButtonStyle>

                    {this.state.showSendTest && (
                        <Button variant='secondary' onClick={this.updateStats}>
                             Enviar Resultados
                        </Button>
                    )}

                    {this.state.showWrongAlert && (
                        <AlertQuiz variant="danger">
                            <AlertWrong>La respuesta no es correcta :</AlertWrong>
                            {/* <p> {this.state.question.correct} </p> */}
                            <ButtonAlertWr variant="primary" type="submit" onClick={() => this.setState({
                                showWrongAlert: false
                            })}>
                                Continuar
                            </ButtonAlertWr>
                        </AlertQuiz>
                    )}

                    {this.state.showCorrectAlert && (
                        <AlertQuiz variant="success">
                            <Alert.Heading>¡Buen Trabajo!</Alert.Heading>
                            <ButtonAlertCo variant="primary" type="submit" onClick={() => this.setState({
                                showCorrectAlert: false
                            })}>
                                Continuar
                            </ButtonAlertCo>
                        </AlertQuiz>
                    )}
                </FormStyle>
            </ContainerForm>
        )
    }
}
