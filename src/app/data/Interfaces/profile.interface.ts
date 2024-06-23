export interface Profile{
    id: number,
    name: string,
    description: string,
    avatarUrl: string | null,
    subscribersAmount: number,
    firstName: string,
    lastName: string,
    isActive: boolean,
    stack: string[],
    city: string
}