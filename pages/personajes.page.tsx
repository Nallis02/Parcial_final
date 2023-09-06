import {GetServerSideProps, NextPage} from "next";
import React from "react";

interface Personaje {
    key: string;
    name: string;
}
interface Props {
	personaje: Personaje[];
}

const Personajes: NextPage<Props> = ({personaje}) => {
    console.log(personaje, 'personaje');
	return (
		<div title="Personajes">
			<h1>Personajes</h1>
			<div >
				{personaje.map((personaje) => (
					<div className={''} key={personaje.key}>
						<h2>{personaje.name}</h2>
						<p>codigo: {personaje.key}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const personaje = await getCharacter(1011334); 
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate');
  
    return {
      props: {
        personaje,
      },
    };
  };

  export default Personajes;
  
