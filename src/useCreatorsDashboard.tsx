import { create, type StoreApi } from 'zustand';

interface CreatorDashboardState {
    view: 'list' | 'grid';
};

const initialState: CreatorDashboardState = {
    view: 'grid'
};

const creatorDashboardActions = (
    set: StoreApi<CreatorDashboardState>['setState'],
    get: () => CreatorDashboardState
) => (
    {
        toggleView: () => set(
            (state) => ({ view: state.view === 'grid' ? 'list' : 'grid' })
        ),
        setListView: () => set({ view: 'list' }),
        setGridView: () => set({ view: 'grid' }),
        isListView: () => get().view === 'list',
        isGridView: () => get().view === 'grid',
    }
)


type CreatorDashboardStore = CreatorDashboardState & ReturnType<typeof creatorDashboardActions>;

const useCreatorDashboard = create<CreatorDashboardStore>((set, get) => (
    {
        ...initialState,
        ...creatorDashboardActions(set, get),
    }
));

export default useCreatorDashboard;