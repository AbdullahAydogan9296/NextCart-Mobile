import { Redirect } from 'expo-router';
import { ROUTES } from './routes';

export default function Index() {
    return <Redirect href={ROUTES.LOGIN} />;
} 