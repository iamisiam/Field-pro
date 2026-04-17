import { readFileSync } from 'fs';
import { join } from 'path';

export const metadata = {
  title: 'FieldPro — Field Service Management Platform',
  description: 'Field Service Management Platform',
};

export default function Home() {
  const htmlContent = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf8');
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}