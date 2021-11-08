import Image from 'next/image';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{margin: 'auto',width: '400px'}}>
          <Link href="/">
            <Image src="/../public/logo_conduction_white.png" height={125} width={560} alt="Picture of the author"/>
          </Link>
        </div>
      </Container>
    </>
  )
}
