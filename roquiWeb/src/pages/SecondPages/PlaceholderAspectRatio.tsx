import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import ImageIcon from '@mui/icons-material/Image';
import { Link } from 'react-router-dom';

interface PlaceholderAspectRatioProps {
    image?: string | JSX.Element;
    title: string;
    description: string;
  redirectUrl?: string; // Cambié esto para hacerlo opcional
}

export default function PlaceholderAspectRatio({
    image = <ImageIcon sx={{ fontSize: '3rem', opacity: 0.2 }} />,
    title,
    description,
    redirectUrl,
}: PlaceholderAspectRatioProps) {
    return (
    <Card variant="outlined" sx={{ width: 600,height: 200,display: 'flex', flexDirection: 'row'}}>  
    
        <AspectRatio sx={{ width: '400px', height: '300px' }}>
        {redirectUrl ? (
            <Link to={redirectUrl} style={{ textDecoration: 'none', width: '100%' }}>
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                }}
            >
                {typeof image === 'string' ? (
                <img
                    src={image}
                    alt={title}
                    style={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    }}
                />
                ) : (
                <div
                    style={{
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    }}
                >
                    {image}
                </div>
                )}
            </div>
            </Link>
        ) : (
            <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
            >
            {typeof image === 'string' ? (
                <img
                src={image}
                alt={title}
                style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
                />
            ) : (
                <div
                style={{
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                }}
                >
                {image}
                </div>
            )}
            </div>
        )}
        </AspectRatio>
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          marginLeft: '50px', // Espacio entre la imagen y el texto
            width: '50%',
            height: '40%'
        }}
        >
        <Typography level="title-md">{title}</Typography>
        <Typography level="body-sm" sx={{ textAlign: 'left' }}>{description}</Typography>
        </div>
    </Card>
    );
}
