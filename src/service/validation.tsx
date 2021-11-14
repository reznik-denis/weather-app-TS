import validator from 'validator';

export default function validation(search: string): boolean {
    const val = search.replace(/\s/g, '');
    const validation = validator.isAlpha(val,'en-US', {ignore: '-'})
        return validation === false
}