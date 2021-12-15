import ptBR from 'antd/lib/locale/pt_BR';

export function getCustomLocale() {
  return {
    ...ptBR,
    Table: {
      filterTitle: 'Menu de Filtro',
      filterConfirm: 'Aplicar',
      filterReset: 'Limpar',
      filterEmptyText: 'Sem filtros',
      emptyText: 'Sem conteúdo',
      selectAll: 'Selecionar página atual',
      selectInvert: 'Inverter seleção',
      selectNone: 'Apagar todo o conteúdo',
      selectionAll: 'Selecionar todo o conteúdo',
      sortTitle: 'Ordenar título',
      expand: 'Expandir linha',
      collapse: 'Recolher linha',
      triggerDesc: 'Clique organiza por descendente',
      triggerAsc: 'Clique organiza por ascendente',
      cancelSort: 'Clique para cancelar organização',
    },
  };
}
