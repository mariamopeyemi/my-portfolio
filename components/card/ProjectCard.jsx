import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// export default function MultiActionAreaCard() {
export default function ProjectCard({projectTitle, image, btnClick,
    projectSum= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
}
) {
  return (
    <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="diff projects"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projectSum}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link target="_blank" rel="noreferrer noopener" href={btnClick}
            sx={{
              textDecoration: 'none',
              color: 'white',
             }}>
            <Button size="small" color="primary"
            >
            View
            </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}
