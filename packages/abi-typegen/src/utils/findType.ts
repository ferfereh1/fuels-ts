import type { IType } from '../types/interfaces/IType';

export function findType(params: { types: IType[]; typeId: number }) {
  const { types, typeId } = params;

  const foundType = types.find(({ rawAbiType: { typeId: tid } }) => tid === typeId);

  if (!foundType) {
    throw new Error(`Type ID not found: ${typeId}.`);
  }

  // ensure type attributes is always parsed
  foundType.parseComponentsAttributes({ types });

  return foundType;
}
