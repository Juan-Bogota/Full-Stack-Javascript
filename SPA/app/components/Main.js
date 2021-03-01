export function Main() {
    const $main = document.createElement('main');
    $main.id = 'main';
    (location.hash.includes('#/search')) ?  $main.classList.remove('grid-fluid'): $main.classList.add('grid-fluid');
    return $main;
}