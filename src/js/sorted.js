export default function getSortedHealth(list) {
    return list.sort((a, b) => b.health - a.health);
}