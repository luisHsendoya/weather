import {getCountry} from '../helpers'
import useFecha from '../hooks/useFecha.js'
import {Container,Header,Section,Grafica,Statis,Flex,Region,Date,Image,Grade, State} from  '../styled/dashboard.js'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Dashboard({city}) {

    const {weather,main,sys,name,coord}=city;
    const {lon,lat}=!!coord && coord
    const {icon,description}= !!weather && weather[0];
    const {temp,humidity,feels_like,pressure}=!!main && main;
    const {country}=!!sys && sys;
    const {fecha}= useFecha(city,lat,lon);
    const {formatted}= !!fecha && fecha;
   
    
    
  return (
    <Container>
        <div>
            <Header>
                <Region>{name}, {getCountry(country)}</Region>
                <Date>{formatted}</Date>
            </Header>
            <Flex>
                <Section>
                    <Grade>{temp}°C</Grade>
                    <State>{description}</State>

                </Section>

                <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>

            </Flex>
            <Flex>
                <Statis>Feels Like <span>{feels_like}°C</span></Statis>
                <Statis>Humidity <span>{humidity}%</span></Statis>
                <Statis>Pressure <span>{pressure}{" "}mb</span></Statis>

            </Flex>
        </div>
        <Grafica>
            <CircularProgressbar value={humidity}
                styles={buildStyles({
                pathColor:'#1572A1',
                trailColor:'#f5f5f5',
                textColor:'#2E0249',
                textSize: '11px',
                pathTransitionDuration: 0.9,

                })}
                text={`${humidity}% Humidity`}  /> 

            
        </Grafica>

    </Container>
  )
}

export default Dashboard