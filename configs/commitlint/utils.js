function formatTypeEnums(types) {
  return types.map(formatTypeName);
}

function formatTypes(types) {
  return types.map((type) => ({
    value: type.label,
    name: formatDescription(type),
    emoji: type.emoji,
  }));
}

function formatTypeName(type) {
  const { label, emoji } = type;
  return `${emoji} ${label}`;
}

function formatDescription(type) {
  const NAME_LENGTH = 14;
  const SHORT_EMOJI = ['📦️'];
  const LONG_EMOJI = ['✨'];

  let typeName = formatTypeName(type);
  let formattedName = `${typeName}:`.padEnd(NAME_LENGTH, ' ');

  if (SHORT_EMOJI.includes(type.emoji)) {
    formattedName += ' ';
  }

  if (LONG_EMOJI.includes(type.emoji)) {
    formattedName = formattedName.slice(0, -1);
  }

  return `${formattedName}${type.desc}`;
}

module.exports = { formatTypeEnums, formatTypes };
